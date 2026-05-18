import type { Variant } from '../data/types'

interface VariantSelectorProps {
  selected: Variant
  onChange: (variant: Variant) => void
}

const VARIANTS: { key: Variant; icon: string; label: string; sublabel: string }[] = [
  {
    key: 'couple',
    icon: '💬',
    label: 'Dating / Couples',
    sublabel: 'Based on tendencies and expectations, explore your alignment',
  },
  {
    key: 'married',
    icon: '🏠',
    label: 'Married / Cohabiting',
    sublabel: 'Based on real patterns, identify friction and growth areas',
  },
]

export function VariantSelector({ selected, onChange }: VariantSelectorProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <p className="text-xs text-muted text-center mb-3 uppercase tracking-widest">Choose Version</p>
      <div className="flex flex-col gap-2">
        {VARIANTS.map(({ key, icon, label, sublabel }) => {
          const isSelected = selected === key
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="tier-card w-full flex items-center gap-3 px-4 py-3 rounded-[10px] border text-left"
              style={{
                background: isSelected ? 'rgba(79,156,247,0.10)' : '#111827',
                borderColor: isSelected ? '#4f9cf7' : '#1e2a3a',
              }}
            >
              <span className="text-xl select-none">{icon}</span>
              <div className="flex-1 min-w-0">
                <span
                  className="text-sm font-semibold"
                  style={{ color: isSelected ? '#4f9cf7' : '#e2e8f0' }}
                >
                  {label}
                </span>
                <p className="text-xs mt-0.5" style={{ color: '#8896ab' }}>
                  {sublabel}
                </p>
              </div>
              <div
                className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor: isSelected ? '#4f9cf7' : '#1e2a3a',
                  background: isSelected ? '#4f9cf7' : 'transparent',
                }}
              >
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
