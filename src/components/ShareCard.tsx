import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts'
import type { RadarDataPoint } from '../data/types'
import type { CompatibilityResult } from '../utils/scoring'
import type { Tier } from '../data/dimensions'

interface ShareCardProps {
  radarData: RadarDataPoint[]
  result: CompatibilityResult
  aligned: string[]
  divergent: string[]
  tier: Tier
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ radarData, result, aligned, divergent, tier }, ref) => {
    const { t, i18n } = useTranslation()
    const isEn = i18n.language === 'en'
    const listJoiner = isEn ? ', ' : ' · '
    return (
      <div
        ref={ref}
        style={{
          width: 360,
          background: '#0a0f1a',
          borderRadius: 16,
          padding: 24,
          fontFamily: "'Noto Sans SC', sans-serif",
          color: '#e2e8f0',
          border: '1px solid #1e2a3a',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>⬡</div>
          <div style={{ fontSize: 11, color: '#4f9cf7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            Resonance · {t(`tier.${tier}.label`)}
          </div>
          <div
            style={{
              display: 'inline-block',
              padding: '5px 18px',
              borderRadius: 20,
              fontSize: 15,
              fontWeight: 700,
              color: result.color,
              background: `${result.color}18`,
              border: `1px solid ${result.color}40`,
            }}
          >
            {t(result.labelKey)}
          </div>
        </div>

        {/* Radar */}
        <div style={{ width: '100%', height: 220, marginBottom: 16 }}>
          <ResponsiveContainer>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="65%">
              <PolarGrid stroke="#1e2a3a" />
              <PolarAngleAxis dataKey="dimension" tick={{ fill: '#8896ab', fontSize: 9 }} />
              <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
              <Radar name="A" dataKey="A" stroke="#4f9cf7" fill="#4f9cf7" fillOpacity={0.2} strokeWidth={1.5} />
              <Radar name="B" dataKey="B" stroke="#f472b6" fill="#f472b6" fillOpacity={0.2} strokeWidth={1.5} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {aligned.length > 0 && (
            <div style={{ flex: 1, background: 'rgba(52,211,153,0.08)', borderRadius: 8, padding: '8px 10px', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div style={{ fontSize: 10, color: '#34d399', marginBottom: 3 }}>{t('results.aligned')}</div>
              <div style={{ fontSize: 11, color: '#8896ab', lineHeight: 1.4 }}>{aligned.join(listJoiner)}</div>
            </div>
          )}
          {divergent.length > 0 && (
            <div style={{ flex: 1, background: 'rgba(239,68,68,0.08)', borderRadius: 8, padding: '8px 10px', border: '1px solid rgba(239,68,68,0.2)' }}>
              <div style={{ fontSize: 10, color: '#ef4444', marginBottom: 3 }}>{t('results.divergent')}</div>
              <div style={{ fontSize: 11, color: '#8896ab', lineHeight: 1.4 }}>{divergent.join(listJoiner)}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', borderTop: '1px solid #1e2a3a', paddingTop: 10 }}>
          <span style={{ fontSize: 10, color: '#4a5568' }}>{t('shareCard.footer')}</span>
        </div>
      </div>
    )
  }
)

ShareCard.displayName = 'ShareCard'
