import type { DimensionScores, RadarDataPoint, Question } from '../data/types'
import type { Tier, Variant } from '../data/dimensions'
import { getDimensions } from '../data/dimensions'

/**
 * Weighted average of scores within one dimension.
 * Questions with weight > 1 (e.g. deal-breakers) count proportionally more.
 */
function weightedAvg(scores: number[], questions: Question[]): number {
  if (scores.length === 0) return 0
  let weightedSum = 0
  let totalWeight = 0
  scores.forEach((score, i) => {
    const w = questions[i]?.weight ?? 1
    weightedSum += score * w
    totalWeight += w
  })
  return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 10) / 10 : 0
}

export function computeRadarData(
  scoresA: DimensionScores,
  scoresB: DimensionScores,
  tier: Tier,
  variant: Variant = 'couple',
  seed = 0
): RadarDataPoint[] {
  const dims = getDimensions(tier, variant, seed)

  return dims.map((dim) => {
    const aArr = scoresA[dim.key] ?? []
    const bArr = scoresB[dim.key] ?? []
    const avgA = weightedAvg(aArr, dim.questions)
    const avgB = weightedAvg(bArr, dim.questions)
    const diff = Math.abs(avgA - avgB)
    const dimWeight = dim.weight ?? 1

    return {
      dimension: dim.label,
      dimensionEn: dim.labelEn ?? dim.label,
      dimKey: dim.key,
      A: avgA,
      B: avgB,
      diff,
      weightedDiff: diff * dimWeight,
      dimWeight,
      fullMark: 10,
    }
  })
}

export type CompatibilityLevel = 'high' | 'moderate' | 'low' | 'critical'

export interface CompatibilityResult {
  level: CompatibilityLevel
  labelKey: string
  color: string
  descKey: string
}

export function getCompatibilityResult(radarData: RadarDataPoint[], variant: Variant = 'couple'): CompatibilityResult {
  // Weighted average diff (dimension weights already baked into weightedDiff)
  const totalWeight = radarData.reduce((s, d) => s + d.dimWeight, 0)
  const avgWeightedDiff = radarData.reduce((s, d) => s + d.weightedDiff, 0) / totalWeight
  const prefix = variant === 'married' ? 'results.married' : 'results.couple'

  if (variant === 'married') {
    // Married framing: focus on current friction, not predictive compatibility
    if (avgWeightedDiff <= 1.2) {
      return { level: 'high', labelKey: `${prefix}.high.label`, color: '#34d399', descKey: `${prefix}.high.desc` }
    }
    if (avgWeightedDiff <= 2.2) {
      return { level: 'moderate', labelKey: `${prefix}.moderate.label`, color: '#4f9cf7', descKey: `${prefix}.moderate.desc` }
    }
    if (avgWeightedDiff <= 3.2) {
      return { level: 'low', labelKey: `${prefix}.low.label`, color: '#f59e0b', descKey: `${prefix}.low.desc` }
    }
    return { level: 'critical', labelKey: `${prefix}.critical.label`, color: '#ef4444', descKey: `${prefix}.critical.desc` }
  }

  // Standard couple framing
  if (avgWeightedDiff <= 1.2) {
    return { level: 'high', labelKey: `${prefix}.high.label`, color: '#34d399', descKey: `${prefix}.high.desc` }
  }
  if (avgWeightedDiff <= 2.2) {
    return { level: 'moderate', labelKey: `${prefix}.moderate.label`, color: '#4f9cf7', descKey: `${prefix}.moderate.desc` }
  }
  if (avgWeightedDiff <= 3.2) {
    return { level: 'low', labelKey: `${prefix}.low.label`, color: '#f59e0b', descKey: `${prefix}.low.desc` }
  }
  return { level: 'critical', labelKey: `${prefix}.critical.label`, color: '#ef4444', descKey: `${prefix}.critical.desc` }
}
