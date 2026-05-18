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
      dimensionEn: dim.labelEn,
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
  label: string
  color: string
  desc: string
}

export function getCompatibilityResult(radarData: RadarDataPoint[], variant: Variant = 'couple'): CompatibilityResult {
  // Weighted average diff (dimension weights already baked into weightedDiff)
  const totalWeight = radarData.reduce((s, d) => s + d.dimWeight, 0)
  const avgWeightedDiff = radarData.reduce((s, d) => s + d.weightedDiff, 0) / totalWeight

  if (variant === 'married') {
    // Married framing: focus on current friction, not predictive compatibility
    if (avgWeightedDiff <= 1.2) {
      return { level: 'high', label: '运转顺畅', color: '#34d399', desc: '你们目前在绝大多数维度上的实际模式高度协调。这是关系稳定的好信号。' }
    }
    if (avgWeightedDiff <= 2.2) {
      return { level: 'moderate', label: '有待磨合', color: '#4f9cf7', desc: '整体运转良好，少数维度有需要关注的摩擦点。这些正是值得坐下来认真谈的地方。' }
    }
    if (avgWeightedDiff <= 3.2) {
      return { level: 'low', label: '需要主动处理', color: '#f59e0b', desc: '多个维度存在明显摩擦。这些问题如果长期回避会积累，建议优先选一两个最重要的开始讨论。' }
    }
    return { level: 'critical', label: '亟需深度对话', color: '#ef4444', desc: '你们在多个重要维度上的模式差异显著。这不是关系的终点，而是需要认真面对的信号。建议寻求伴侣咨询。' }
  }

  // Standard couple framing
  if (avgWeightedDiff <= 1.2) {
    return { level: 'high', label: '高度兼容', color: '#34d399', desc: '你们在绝大多数关键维度上的决策倾向高度一致。这是非常好的起点，但别忘了定期重新对齐——人会变。' }
  }
  if (avgWeightedDiff <= 2.2) {
    return { level: 'moderate', label: '基本兼容', color: '#4f9cf7', desc: '多数维度对齐，少数存在分歧。分歧本身不是问题，关键是你们能否就分歧点展开坦诚对话并找到双方接受的方案。' }
  }
  if (avgWeightedDiff <= 3.2) {
    return { level: 'low', label: '需要深入沟通', color: '#f59e0b', desc: '多个维度存在明显差异。建议在做出重大决定前，就分歧较大的维度进行深入讨论，理解差异的根源。' }
  }
  return { level: 'critical', label: '差异显著', color: '#ef4444', desc: '你们在关键决策维度上的倾向差异较大。这不意味着不能在一起，但需要双方高度自觉地协商和妥协。建议寻求专业咨询。' }
}
