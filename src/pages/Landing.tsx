import { useTranslation } from 'react-i18next'
import { TierSelector } from '../components/TierSelector'
import { VariantSelector } from '../components/VariantSelector'
import type { Tier } from '../data/dimensions'
import { TIER_CONFIGS } from '../data/dimensions'
import type { Variant } from '../data/types'

interface LandingProps {
  tier: Tier
  variant: Variant
  onTierChange: (tier: Tier) => void
  onVariantChange: (variant: Variant) => void
  onStart: () => void
  hasSession: boolean
  onReset: () => void
}

export function Landing({ tier, variant, onTierChange, onVariantChange, onStart, hasSession, onReset }: LandingProps) {
  const { t } = useTranslation()
  const cfg = TIER_CONFIGS[tier]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center animate-fadeIn">
      <div className="text-5xl mb-4 select-none font-serif">⬡</div>
      <h1 className="text-2xl font-bold text-slate-200 mb-1 font-serif">{t('app.name')}</h1>
      <p className="text-accent text-xs tracking-widest uppercase mb-6">{t('app.tagline')}</p>

      <p className="text-dim text-sm leading-[1.8] max-w-sm mb-2">
        {t('landing.desc', { count: cfg.questionCount })}
      </p>
      <p className="text-muted text-[13px] leading-relaxed max-w-[320px] mb-8">
        {t('landing.subdesc')}
      </p>

      <div className="w-full max-w-xs mb-4">
        <VariantSelector selected={variant} onChange={onVariantChange} />
      </div>

      <div className="w-full max-w-xs mb-6">
        <TierSelector selected={tier} onChange={onTierChange} />
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-xs py-[14px] px-8 rounded-[10px] text-white text-[15px] font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg, #4f9cf7, #6366f1)' }}
      >
        {hasSession ? t('landing.resume') : t('landing.start')}
      </button>

      {hasSession && (
        <button
          onClick={onReset}
          className="mt-3 text-xs text-muted hover:text-dim transition-colors py-2"
        >
          {t('landing.restart')}
        </button>
      )}

      <div className="mt-10 flex flex-col gap-3 w-full max-w-xs">
        {(['privacy', 'guides', 'tiers'] as const).map((k) => (
          <div key={k} className="flex items-center gap-3 text-sm text-dim">
            <span>{k === 'privacy' ? '🔒' : k === 'guides' ? '💬' : '⚡'}</span>
            <span>{t(`landing.features.${k}`)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
