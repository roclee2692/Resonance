import { useTranslation } from 'react-i18next'
import type { RadarDataPoint, Variant } from '../data/types'
import { DIALOGUE_GUIDES } from '../data/dialogueGuides'
import type { Tier } from '../data/dimensions'
import { getDimensions } from '../data/dimensions'

interface DimensionDetailProps {
  data: RadarDataPoint[]
  tier: Tier
  variant: Variant
  seed: number
}

function DiffTag({ diff }: { diff: number }) {
  const { t } = useTranslation()
  if (diff > 3) return <span className="tag bg-red-500/10 text-red-400 border-red-500/20">{t('dimension.divergent')}</span>
  if (diff > 1.5) return <span className="tag bg-amber-500/10 text-amber-400 border-amber-500/20">{t('dimension.moderate')}</span>
  return <span className="tag bg-emerald-500/10 text-emerald-400 border-emerald-500/20">{t('dimension.aligned')}</span>
}

export function DimensionDetail({ data, tier, variant, seed }: DimensionDetailProps) {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const dims = getDimensions(tier, variant, seed)

  return (
    <div className="flex flex-col gap-2">
      {data.map((d) => {
        const dim = dims.find((dim) => dim.key === d.dimKey)
        const guide = DIALOGUE_GUIDES.find((g) => g.dimKey === d.dimKey)
        const label = isEn ? d.dimensionEn : d.dimension
        const prompts = isEn ? guide?.promptsEn : guide?.prompts

        return (
          <details
            key={d.dimKey}
            className="bg-card border border-border rounded-[10px] overflow-hidden"
          >
            <summary className="flex items-center justify-between px-4 py-[10px] cursor-pointer list-none select-none">
              <div>
                <span className="text-sm font-medium text-slate-200">{label}</span>
                {dim && (
                  <p className="text-xs text-muted mt-0.5">{isEn ? dim.descEn : dim.desc}</p>
                )}
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-accent">A: {d.A}</span>
                  <span className="text-xs text-[#f472b6]">B: {d.B}</span>
                </div>
              </div>
              <DiffTag diff={d.diff} />
            </summary>

            {prompts && prompts.length > 0 && (
              <div className="px-4 pb-4 pt-2 border-t border-border animate-fadeIn">
                <p className="text-xs text-muted mb-2 font-medium">{t('results.dialogPrompts')}</p>
                <ul className="flex flex-col gap-1.5">
                  {prompts.map((p, i) => (
                    <li key={i} className="text-xs text-dim leading-relaxed">
                      · {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </details>
        )
      })}
    </div>
  )
}
