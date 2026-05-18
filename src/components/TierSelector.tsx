import type { Tier } from '../data/dimensions'
import { TIER_CONFIGS } from '../data/dimensions'

interface TierSelectorProps {
  selected: Tier
  onChange: (tier: Tier) => void
}

const TIER_ORDER: Tier[] = ['quick', 'standard', 'full']

const ICONS: Record<Tier, string> = {
  quick: '⚡',
  standard: '🎯',
  full: '🔬',
}

export function TierSelector({ selected, onChange }: TierSelectorProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <p className="text-xs text-muted text-center mb-3 uppercase tracking-widest">选择题量</p>
      <div className="flex flex-col gap-2">
        {TIER_ORDER.map((tier) => {
          const cfg = TIER_CONFIGS[tier]
          const isSelected = selected === tier
          return (
            <button
              key={tier}
              onClick={() => onChange(tier)}
              className="tier-card w-full flex items-center gap-3 px-4 py-3 rounded-[10px] border text-left"
              style={{
                background: isSelected ? 'rgba(79,156,247,0.10)' : '#111827',
                borderColor: isSelected ? '#4f9cf7' : '#1e2a3a',
              }}
            >
              <span className="text-xl select-none">{ICONS[tier]}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isSelected ? '#4f9cf7' : '#e2e8f0' }}
                  >
                    {cfg.label}
                  </span>
                  <span className="text-xs text-muted">{cfg.timeMinutes}</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: '#8896ab' }}>
                  {cfg.sublabel}
                </p>
              </div>
              <div
                className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor: isSelected ? '#4f9cf7' : '#1e2a3a',
                  background: isSelected ? '#4f9cf7' : 'transparent',
                }}
              >
                {isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
