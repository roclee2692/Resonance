import { useTranslation } from 'react-i18next'

interface TransitionScreenProps {
  onContinue: () => void
}

export function TransitionScreen({ onContinue }: TransitionScreenProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-scaleIn">
      <div className="text-5xl mb-6 select-none">🔄</div>
      <h2 className="text-xl font-semibold text-slate-200 mb-3">{t('transition.title')}</h2>
      <p className="text-dim text-sm leading-relaxed mb-8 max-w-xs whitespace-pre-line">
        {t('transition.desc')}
      </p>
      <button
        onClick={onContinue}
        className="w-full max-w-xs py-[14px] px-8 rounded-[10px] text-white text-[15px] font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg, #4f9cf7, #6366f1)' }}
      >
        {t('transition.start')}
      </button>
    </div>
  )
}
