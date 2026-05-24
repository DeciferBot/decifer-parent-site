import DeciferMark from './DeciferMark'

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const TEXT_CLASS: Record<LogoSize, string> = {
  xs: 'text-[11px] tracking-[0.20em]',
  sm: 'text-sm tracking-[0.18em]',
  md: 'text-base tracking-[0.16em]',
  lg: 'text-xl tracking-[0.14em]',
  xl: 'text-2xl tracking-[0.12em]',
}

const GAP: Record<LogoSize, string> = {
  xs: 'gap-1.5',
  sm: 'gap-2',
  md: 'gap-2.5',
  lg: 'gap-3',
  xl: 'gap-4',
}

interface DeciferLogoProps {
  size?: LogoSize
  className?: string
}

export default function DeciferLogo({ size = 'md', className = '' }: DeciferLogoProps) {
  return (
    <span
      className={`inline-flex items-center ${GAP[size]} ${className}`}
      aria-label="DECIFER"
    >
      <DeciferMark size={size} />
      <span className={`font-bold text-ink ${TEXT_CLASS[size]}`}>DECIFER</span>
    </span>
  )
}
