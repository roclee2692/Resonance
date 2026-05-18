interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = ((current + 1) / total) * 100
  return (
    <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-400 ease-out"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(90deg, #4f9cf7, #f472b6)',
        }}
      />
    </div>
  )
}
