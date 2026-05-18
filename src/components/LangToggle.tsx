import { useTranslation } from 'react-i18next'

export function LangToggle() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language
  const isZh = language.startsWith('zh')

  return (
    <button
      onClick={() => i18n.changeLanguage(isZh ? 'en' : 'zh')}
      className="fixed top-4 right-4 z-50 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-border text-muted hover:text-dim hover:border-accent/40 transition-all"
      style={{ background: '#0d1422' }}
      aria-label="Switch language"
    >
      {isZh ? 'EN' : '中'}
    </button>
  )
}
