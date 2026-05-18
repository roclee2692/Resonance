import { useAssessment } from './hooks/useAssessment'
import { Landing } from './pages/Landing'
import { Assessment } from './pages/Assessment'
import { TransitionScreen } from './components/TransitionScreen'
import { Results } from './pages/Results'
import { LangToggle } from './components/LangToggle'
import { loadSession } from './utils/storage'

export default function App() {
  const {
    tier, variant, seed, phase,
    answersA, answersB, scoresA, scoresB,
    setTier, setVariant, answer, back, setPhase, reset,
  } = useAssessment()

  const hasSession = !!loadSession() && phase !== 'start'

  return (
    <div className="min-h-screen bg-bg text-slate-200 max-w-[480px] mx-auto relative">
      <LangToggle />

      {phase === 'start' && (
        <Landing
          tier={tier}
          variant={variant}
          onTierChange={setTier}
          onVariantChange={setVariant}
          onStart={() => setPhase('A')}
          hasSession={hasSession}
          onReset={reset}
        />
      )}

      {phase === 'A' && (
        <Assessment
          tier={tier}
          variant={variant}
          seed={seed}
          person="A"
          answers={answersA}
          onAnswer={(qKey, score, dimKey) => answer('A', qKey, score, dimKey)}
          onBack={() => back('A')}
          onComplete={() => setPhase('betweenAB')}
        />
      )}

      {phase === 'betweenAB' && (
        <TransitionScreen onContinue={() => setPhase('B')} />
      )}

      {phase === 'B' && (
        <Assessment
          tier={tier}
          variant={variant}
          seed={seed}
          person="B"
          answers={answersB}
          onAnswer={(qKey, score, dimKey) => answer('B', qKey, score, dimKey)}
          onBack={() => back('B')}
          onComplete={() => setPhase('result')}
        />
      )}

      {phase === 'result' && (
        <Results
          tier={tier}
          variant={variant}
          seed={seed}
          scoresA={scoresA}
          scoresB={scoresB}
          onReset={reset}
        />
      )}
    </div>
  )
}
