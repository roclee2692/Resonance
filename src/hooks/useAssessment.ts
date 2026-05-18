import { useState, useEffect, useCallback } from 'react'
import type { Phase, Person, AssessmentAnswers, DimensionScores, HistoryEntry, Variant } from '../data/types'
import type { Tier } from '../data/dimensions'
import { saveSession, loadSession, clearSession } from '../utils/storage'
import { generateSeed } from '../utils/random'

interface AssessmentState {
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

function makeInitial(): AssessmentState {
  return {
    tier: 'quick',
    variant: 'couple',
    seed: generateSeed(),
    phase: 'start',
    answersA: {},
    answersB: {},
    scoresA: {},
    scoresB: {},
    historyA: [],
    historyB: [],
  }
}

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>(() => {
    const saved = loadSession()
    return saved ?? makeInitial()
  })

  useEffect(() => {
    saveSession(state)
  }, [state])

  const setTier = useCallback((tier: Tier) => {
    setState((prev) => ({ ...prev, tier }))
  }, [])

  const setVariant = useCallback((variant: Variant) => {
    setState((prev) => ({ ...prev, variant }))
  }, [])

  const answer = useCallback((person: Person, qKey: string, score: number, dimKey: string) => {
    setState((prev) => {
      const aKey = person === 'A' ? 'answersA' : 'answersB'
      const sKey = person === 'A' ? 'scoresA' : 'scoresB'
      const hKey = person === 'A' ? 'historyA' : 'historyB'

      const qIdx = parseInt(qKey.split('-')[1])
      const prevScores = prev[sKey][dimKey] ?? []
      const newScores = [...prevScores]
      newScores[qIdx] = score

      return {
        ...prev,
        [aKey]: { ...prev[aKey], [qKey]: score },
        [sKey]: { ...prev[sKey], [dimKey]: newScores },
        [hKey]: [...prev[hKey], { qKey, dimKey }],
      }
    })
  }, [])

  const back = useCallback((person: Person) => {
    setState((prev) => {
      const aKey = person === 'A' ? 'answersA' : 'answersB'
      const sKey = person === 'A' ? 'scoresA' : 'scoresB'
      const hKey = person === 'A' ? 'historyA' : 'historyB'

      const history = prev[hKey]
      if (history.length === 0) return prev

      const last = history[history.length - 1]
      const newAnswers = { ...prev[aKey] }
      delete newAnswers[last.qKey]

      const qIdx = parseInt(last.qKey.split('-')[1])
      const prevScores = [...(prev[sKey][last.dimKey] ?? [])]
      prevScores.splice(qIdx, 1)

      return {
        ...prev,
        [aKey]: newAnswers,
        [sKey]: { ...prev[sKey], [last.dimKey]: prevScores },
        [hKey]: history.slice(0, -1),
      }
    })
  }, [])

  const setPhase = useCallback((phase: Phase) => {
    setState((prev) => ({ ...prev, phase }))
  }, [])

  const reset = useCallback(() => {
    clearSession()
    setState(makeInitial())
  }, [])

  return { ...state, setTier, setVariant, answer, back, setPhase, reset }
}
