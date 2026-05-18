import { useTranslation } from 'react-i18next'
import type { Person, AssessmentAnswers, Variant } from '../data/types'
import type { Tier } from '../data/dimensions'
import { getFlatQuestions } from '../data/dimensions'
import { QuestionCard } from '../components/QuestionCard'

interface AssessmentProps {
  tier: Tier
  variant: Variant
  seed: number
  person: Person
  answers: AssessmentAnswers
  onAnswer: (qKey: string, score: number, dimKey: string) => void
  onBack: () => void
  onComplete: () => void
}

export function Assessment({ tier, variant, seed, person, answers, onAnswer, onBack, onComplete }: AssessmentProps) {
  const { t } = useTranslation()
  const flatQ = getFlatQuestions(tier, variant, seed)
  const currentIdx = Object.keys(answers).length

  if (currentIdx >= flatQ.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-scaleIn">
        <div className="text-4xl mb-5">✓</div>
        <h2 className="text-xl font-semibold text-slate-200 mb-2">
          {t('assessment.complete', { person })}
        </h2>
        <p className="text-dim text-sm mb-8">
          {t('assessment.completeDesc', { count: flatQ.length })}
        </p>
        <button
          onClick={onComplete}
          className="w-full max-w-xs py-[14px] px-8 rounded-[10px] text-white text-[15px] font-semibold hover:opacity-90 active:scale-[0.98]"
          style={{ background: 'linear-gradient(135deg, #4f9cf7, #6366f1)' }}
        >
          {t('assessment.continue')}
        </button>
      </div>
    )
  }

  const q = flatQ[currentIdx]
  const qKey = `${q.dimKey}-${q.qIdx}`

  return (
    <QuestionCard
      question={q}
      dimLabel={q.dimLabel}
      person={person}
      currentIdx={currentIdx}
      totalQuestions={flatQ.length}
      animKey={currentIdx}
      onAnswer={(score) => onAnswer(qKey, score, q.dimKey)}
      onBack={onBack}
    />
  )
}
