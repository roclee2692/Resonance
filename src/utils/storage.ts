import type { AssessmentAnswers, DimensionScores, HistoryEntry, Phase, Variant } from '../data/types'
import type { Tier } from '../data/dimensions'

const KEY = 'resonance_session'

export interface SavedSession {
  tier: Tier
  variant: Variant
  seed: number
  phase: Phase
  answersA: AssessmentAnswers
  answersB: AssessmentAnswers
  scoresA: DimensionScores
  scoresB: DimensionScores
  historyA: HistoryEntry[]
  historyB: HistoryEntry[]
}

export function saveSession(session: SavedSession): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(session))
  } catch {
    // storage full or unavailable — silent fail
  }
}

export function loadSession(): SavedSession | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw) as SavedSession
  } catch {
    return null
  }
}

export function clearSession(): void {
  localStorage.removeItem(KEY)
}
