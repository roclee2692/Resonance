import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { DimensionScores, Variant } from '../data/types'
import type { Tier } from '../data/dimensions'
import { RadarComparison } from '../components/RadarComparison'
import { DimensionDetail } from '../components/DimensionDetail'
import { ShareCard } from '../components/ShareCard'
import { computeRadarData, getCompatibilityResult } from '../utils/scoring'
import { shareOrDownload } from '../utils/share'

interface ResultsProps {
  tier: Tier
  variant: Variant
  seed: number
  scoresA: DimensionScores
  scoresB: DimensionScores
  onReset: () => void
}

export function Results({ tier, variant, seed, scoresA, scoresB, onReset }: ResultsProps) {
  const { t } = useTranslation()
  const shareCardRef = useRef<HTMLDivElement>(null)
  const [sharing, setSharing] = useState(false)

  const radarData = computeRadarData(scoresA, scoresB, tier, variant, seed)
  const result = getCompatibilityResult(radarData, variant)

  const aligned = radarData.filter((d) => d.diff <= 1.5).map((d) => d.dimension)
  const moderate = radarData.filter((d) => d.diff > 1.5 && d.diff <= 3).map((d) => d.dimension)
  const divergent = radarData.filter((d) => d.diff > 3).map((d) => d.dimension)

  const handleShare = async () => {
    if (!shareCardRef.current || sharing) return
    setSharing(true)
    try {
      await shareOrDownload(shareCardRef.current)
    } finally {
      setSharing(false)
    }
  }

  return (
    <div className="px-4 py-5 pb-16 animate-fadeSlideIn">
      {/* Compatibility badge */}
      <div className="text-center mb-6">
        <div
          className="inline-block px-5 py-1.5 rounded-full text-[15px] font-bold mb-3 border"
          style={{ color: result.color, background: `${result.color}18`, borderColor: `${result.color}40` }}
        >
          {result.label}
        </div>
        <p className="text-dim text-[13px] leading-[1.8] max-w-sm mx-auto">{result.desc}</p>
      </div>

      {/* Radar chart */}
      <div className="mb-6">
        <RadarComparison data={radarData} />
      </div>

      {/* Dimension breakdown */}
      <div className="mb-6">
        <DimensionDetail data={radarData} tier={tier} variant={variant} seed={seed} />
      </div>

      {/* Summary sections */}
      {aligned.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-emerald-400 mb-1.5">{t('results.aligned')}</h3>
          <p className="text-dim text-[13px] leading-[1.7]">
            {t('results.alignedDesc', { dims: aligned.join('、') })}
          </p>
        </div>
      )}
      {moderate.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-amber-400 mb-1.5">{t('results.moderate')}</h3>
          <p className="text-dim text-[13px] leading-[1.7]">
            {t('results.moderateDesc', { dims: moderate.join('、') })}
          </p>
        </div>
      )}
      {divergent.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-red-400 mb-1.5">{t('results.divergent')}</h3>
          <p className="text-dim text-[13px] leading-[1.7]">
            {t('results.divergentDesc', { dims: divergent.join('、') })}
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-5 p-4 bg-highlight rounded-[10px] border border-border">
        <p className="text-muted text-xs leading-[1.8]">{t('results.disclaimer')}</p>
      </div>

      {/* Actions */}
      <button
        onClick={handleShare}
        disabled={sharing}
        className="w-full mt-5 py-[14px] px-8 rounded-[10px] text-[15px] font-semibold border border-accent/30 text-accent bg-highlight hover:bg-accent/15 transition-all active:scale-[0.98] disabled:opacity-50"
      >
        {sharing ? t('results.sharing') : t('results.share')}
      </button>

      <button
        onClick={onReset}
        className="w-full mt-3 py-[14px] px-8 rounded-[10px] text-white text-[15px] font-semibold hover:opacity-90 active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg, #4f9cf7, #6366f1)' }}
      >
        {t('results.reset')}
      </button>

      {/* Hidden share card for html2canvas */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none" aria-hidden>
        <ShareCard
          ref={shareCardRef}
          radarData={radarData}
          result={result}
          aligned={aligned}
          divergent={divergent}
          tier={tier}
        />
      </div>
    </div>
  )
}
