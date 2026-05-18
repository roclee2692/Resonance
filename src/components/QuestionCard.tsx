import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Question } from '../data/types'

interface QuestionCardProps {
  question: Question & { dimLabel: string; dimLabelEn?: string }
  dimLabel: string
  dimLabelEn?: string
  person: 'A' | 'B'
  currentIdx: number
  totalQuestions: number
  animKey: number
  onAnswer: (score: number) => void
  onBack: () => void
}

export function QuestionCard({
  question,
  dimLabel,
  dimLabelEn,
  person,
  currentIdx,
  totalQuestions,
  animKey,
  onAnswer,
  onBack,
}: QuestionCardProps) {
  const { t, i18n } = useTranslation()
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const language = i18n.resolvedLanguage ?? i18n.language
  const isEn = language.startsWith('en')
  const txt = (zh: string, en?: string) => (isEn && en ? en : zh)

  const handleAnswer = (score: number, idx: number) => {
    setSelectedIdx(idx)
    // Brief delay so user sees selection feedback before advancing
    setTimeout(() => {
      setSelectedIdx(null)
      onAnswer(score)
    }, 180)
  }

  return (
    <div key={animKey} className="px-4 pt-5 pb-8 question-enter">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-accent text-xs font-semibold tracking-widest uppercase">
          {t('assessment.personLabel', { person })}
        </span>
        <span className="text-muted text-xs">
          {t('assessment.progress', { current: currentIdx + 1, total: totalQuestions })}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-[3px] bg-border rounded-full overflow-hidden mb-5">
        <div
          className="h-full rounded-full"
          style={{
            width: `${((currentIdx + 1) / totalQuestions) * 100}%`,
            background: 'linear-gradient(90deg, #4f9cf7, #f472b6)',
            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Dimension badge */}
      <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium text-accent bg-highlight border border-accent/20">
        {txt(dimLabel, dimLabelEn)}
      </div>

      {/* Question text */}
      <h2 className="text-[17px] font-medium leading-relaxed text-slate-200 mb-5">
        {txt(question.text, question.textEn)}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-[10px]">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.score, i)}
            disabled={selectedIdx !== null}
            className={`option-btn w-full text-left px-4 py-[14px] rounded-[10px] text-sm leading-relaxed text-slate-200 border transition-all duration-200 ${
              selectedIdx === i ? 'option-selected' : 'bg-card border-border hover:border-accent hover:bg-highlight'
            }`}
          >
            {txt(opt.text, opt.textEn)}
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentIdx > 0 && (
        <button
          onClick={onBack}
          disabled={selectedIdx !== null}
          className="mt-4 text-xs text-muted hover:text-dim transition-colors py-2"
        >
          {t('assessment.back')}
        </button>
      )}
    </div>
  )
}
