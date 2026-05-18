import html2canvas from 'html2canvas'
import i18n from '../i18n'

export async function captureElementAsImage(element: HTMLElement): Promise<string> {
  const canvas = await html2canvas(element, {
    backgroundColor: '#0a0f1a',
    scale: 2,
    useCORS: true,
    logging: false,
  })
  return canvas.toDataURL('image/png')
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  link.click()
}

export async function shareOrDownload(element: HTMLElement): Promise<void> {
  const dataUrl = await captureElementAsImage(element)

  // Try Web Share API (mobile)
  if (navigator.share && navigator.canShare) {
    try {
      const blob = await (await fetch(dataUrl)).blob()
      const file = new File([blob], 'resonance-result.png', { type: 'image/png' })
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: i18n.t('shareCard.shareTitle') })
        return
      }
    } catch {
      // Fall through to download
    }
  }

  downloadDataUrl(dataUrl, 'resonance-result.png')
}
