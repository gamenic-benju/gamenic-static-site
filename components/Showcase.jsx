const steps = ['Brief', 'Concept', 'Create', 'Review', 'Deliver'];
const teamRoles = ['3D Artists', 'Designers', 'Animators', 'Engineers'];

export default function Showcase() {
  return (
    <section id="showcase" style={{ padding: '120px 48px', background: '#080808' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }} className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>Showcase</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5' }}>
            Behind the <span className="gold-text">Scenes</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* Process */}
          <div className="reveal" style={{
            background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, padding: '48px 40px',
          }}>
            <span style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Process</span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 600, color: '#f5f5f5', margin: '12px 0 8px' }}>Our Working System</h3>
            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 40 }}>
              A streamlined creative pipeline — from concept to delivery — built for precision, speed, and quality at every stage.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
              {steps.map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'rgba(200,168,78,0.1)', border: '1px solid rgba(200,168,78,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 700, color: '#c8a84e', margin: '0 auto 8px',
                    }}>{i + 1}</div>
                    <div style={{ fontSize: '0.7rem', color: '#888', whiteSpace: 'nowrap' }}>{step}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 24, height: 1, background: 'rgba(200,168,78,0.2)', margin: '0 4px', marginBottom: 20 }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="reveal" style={{ transitionDelay: '0.15s',
            background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12, padding: '48px 40px',
          }}>
            <span style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>People</span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 600, color: '#f5f5f5', margin: '12px 0 8px' }}>Our Team</h3>
            <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 40 }}>
              A passionate collective of artists, designers, developers, and producers united by creative excellence.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {teamRoles.map(role => (
                <div key={role} style={{
                  padding: '10px 20px', border: '1px solid rgba(200,168,78,0.25)',
                  borderRadius: 4, fontSize: '0.8rem', color: '#ccc',
                  background: 'rgba(200,168,78,0.04)',
                }}>{role}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #showcase > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
