import { ImageResponse } from 'next/og'

export const alt = 'DECIFER — Structured Intelligence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#060b18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot-grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(61,126,255,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top: mark + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* Orange bracket mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                width: 6,
                height: 44,
                borderLeft: '4px solid #F05A28',
                borderTop: '4px solid #F05A28',
                borderBottom: '4px solid #F05A28',
                borderRadius: '3px 0 0 3px',
              }}
            />
            <div
              style={{
                width: 6,
                height: 44,
                borderRight: '4px solid #F05A28',
                borderTop: '4px solid #F05A28',
                borderBottom: '4px solid #F05A28',
                borderRadius: '0 3px 3px 0',
                marginLeft: 16,
              }}
            />
          </div>
          <div
            style={{
              color: '#eef2ff',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            DECIFER
          </div>
        </div>

        {/* Centre: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              color: '#eef2ff',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Structured
            <br />
            Intelligence.
          </div>
          <div
            style={{
              color: '#6b7db3',
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 680,
            }}
          >
            The layer between noise and understanding.
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background: 'rgba(240,90,40,0.12)',
                border: '1px solid rgba(240,90,40,0.3)',
                borderRadius: 6,
                padding: '6px 14px',
                color: '#F05A28',
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Markets
            </div>
            <div
              style={{
                background: 'rgba(240,90,40,0.12)',
                border: '1px solid rgba(240,90,40,0.3)',
                borderRadius: 6,
                padding: '6px 14px',
                color: '#F05A28',
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Learning
            </div>
            <div
              style={{
                background: 'rgba(240,90,40,0.12)',
                border: '1px solid rgba(240,90,40,0.3)',
                borderRadius: 6,
                padding: '6px 14px',
                color: '#F05A28',
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              World
            </div>
          </div>
          <div style={{ color: '#3d4a6b', fontSize: 20, fontWeight: 500 }}>
            decifer.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
