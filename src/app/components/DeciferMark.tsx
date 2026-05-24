// Two opposing brackets — the DECIFER master mark.
// Both brackets are #F05A28 (DECIFER orange). Split-colour treatment is prohibited.
// ViewBox 40×32. `height` overrides the named size scale.

const ORANGE = '#F05A28'

type MarkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const HEIGHT: Record<MarkSize, number> = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 30,
  xl: 44,
}

export interface DeciferMarkProps {
  size?: MarkSize
  /** Override height in px; width is computed proportionally. */
  height?: number
  /** If set, both brackets use this colour (monochrome override). */
  color?: string
  className?: string
}

export default function DeciferMark({
  size = 'md',
  height: heightOverride,
  color,
  className = '',
}: DeciferMarkProps) {
  const h = heightOverride ?? HEIGHT[size]
  const w = Math.round(h * 40 / 32)

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <polyline
        points="13,5 5,15 13,25"
        stroke={color ?? ORANGE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="27,7 35,17 27,27"
        stroke={color ?? ORANGE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
