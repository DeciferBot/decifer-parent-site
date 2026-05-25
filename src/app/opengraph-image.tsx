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
        }}
      >
        {/* Top: bracket mark + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 40,
                borderLeft: '4px solid #F05A28',
                borderTop: '4px solid #F05A28',
                borderBottom: '4px solid #F05A28',
                borderRadius: '3px 0 0 3px',
                display: 'flex',
              }}
            />
            <div
              style={{
                width: 10,
                height: 40,
                borderRight: '4px solid #F05A28',
                borderTop: '4px solid #F05A28',
                borderBottom: '4px solid #F05A28',
                borderRadius: '0 3px 3px 0',
                display: 'flex',
              }}
            />
          </div>
          <div
            style={{
              color: '#eef2ff',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: '0.18em',
              display: 'flex',
            }}
          >
            DECIFER
          </div>
        </div>

        {/* Centre: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              color: '#eef2ff',
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Structured</span>
            <span>Intelligence.</span>
          </div>
          <div
            style={{
              color: '#6b7db3',
              fontSize: 28,
              fontWeight: 400,
              maxWidth: 660,
              display: 'flex',
            }}
          >
            The layer between noise and understanding.
          </div>
        </div>

        {/* Bottom: product tags + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Markets', 'Learning', 'World'].map((label) => (
              <div
                key={label}
                style={{
                  background: 'rgba(240,90,40,0.1)',
                  border: '1px solid rgba(240,90,40,0.28)',
                  borderRadius: 6,
                  padding: '7px 16px',
                  color: '#F05A28',
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  display: 'flex',
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ color: '#3d4a6b', fontSize: 20, fontWeight: 500, display: 'flex' }}>
            decifer.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
