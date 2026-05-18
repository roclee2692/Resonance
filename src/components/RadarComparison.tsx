import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useTranslation } from 'react-i18next'
import type { RadarDataPoint } from '../data/types'

interface RadarComparisonProps {
  data: RadarDataPoint[]
}

export function RadarComparison({ data }: RadarComparisonProps) {
  const { i18n, t } = useTranslation()
  const isEn = i18n.language === 'en'
  const chartData = isEn
    ? data.map((d) => ({ ...d, dimension: d.dimensionEn }))
    : data

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="#1e2a3a" />
        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#8896ab', fontSize: 11 }} />
        <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
        <Radar
          name={t('legend.personA')}
          dataKey="A"
          stroke="#4f9cf7"
          fill="#4f9cf7"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Radar
          name={t('legend.personB')}
          dataKey="B"
          stroke="#f472b6"
          fill="#f472b6"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: '#8896ab' }} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
