import type { Tier, Variant } from './dimensions'

export type { Tier, Variant }

export interface QuestionOption {
  text: string
  textEn?: string
  score: number
}

export interface Question {
  text: string
  textEn?: string
  options: QuestionOption[]
  /** Scoring weight within its dimension. Default 1.0. Use 2.0 for deal-breakers. */
  weight?: number
}

export interface Dimension {
  key: string
  label: string
  labelEn: string
  desc: string
  questions: Question[]
  /** Weight for overall compatibility calculation. Default 1.0. */
  weight?: number
}

export type Phase = 'start' | 'A' | 'betweenAB' | 'B' | 'result'
export type Person = 'A' | 'B'

export interface DimensionScores {
  [dimKey: string]: number[]
}

export interface AssessmentAnswers {
  [qKey: string]: number
}

export interface HistoryEntry {
  qKey: string
  dimKey: string
}

export interface RadarDataPoint {
  dimension: string
  dimensionEn: string
  dimKey: string
  A: number
  B: number
  diff: number
  weightedDiff: number
  dimWeight: number
  fullMark: number
}
