import type { Variant } from '../data/types'

interface VariantSelectorProps {
  selected: Variant
  onChange: (variant: Variant) => void
}

const VARIANTS: { key: Variant; icon: string; label: string; sublabel: string }[] = [
  {
    key: 'couple',
    icon: '💬',
    label: '情侣 / 恋人版',
    sublabel: '基于倾向和预期，探索你们的契合度',
  },
  {
    key: 'married',
    icon: '🏠',
    label: '已婚 / 同居版',
    sublabel: '基于真实相处模式，识别摩擦点与成长空间',
  },
]

export function VariantSelector({ selected, onChange }: VariantSelectorProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <p className="text-xs text-muted text-center mb-3 uppercase tracking-widest">选择版本</p>
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
