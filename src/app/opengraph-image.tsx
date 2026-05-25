import { ImageResponse } from 'next/og'

export const alt = 'DECIFER — Information is everywhere. Understanding is not.'
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
              color: '#f4f7ff',
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
              color: '#f4f7ff',
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Information is everywhere.</span>
            <span style={{ color: '#F05A28' }}>Understanding is not.</span>
          </div>
          <div
            style={{
              color: '#c6d0e6',
              fontSize: 28,
              fontWeight: 400,
              maxWidth: 820,
              display: 'flex',
            }}
          >
            DECIFER builds AI intelligence products that help people make sense
            of complex information.
          </div>
        </div>

        {/* Bottom: product tags + domain */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', gap: 10 }}>
            {['Decifer Trading', 'Decifer Learning'].map((label) => (
              <div
                key={label}
                style={{
                  background: 'rgba(240,90,40,0.1)',
                  border: '1px solid rgba(240,90,40,0.32)',
                  borderRadius: 6,
                  padding: '8px 18px',
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
          <div
            style={{
              color: '#97a6c4',
              fontSize: 20,
              fontWeight: 500,
              display: 'flex',
            }}
          >
            decifer.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
