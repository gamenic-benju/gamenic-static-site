const capabilities = ['VFX','Virtual Production','UI/UX','Graphic Design','Animation','LP Production','AI Content'];
const tools = [
  { abbr: 'Ae', name: 'After Effects' },
  { abbr: 'Bl', name: 'Blender' },
  { abbr: 'UE', name: 'Unreal Engine' },
  { abbr: 'Ps', name: 'Photoshop' },
  { abbr: 'Ai', name: 'Illustrator' },
  { abbr: 'Pr', name: 'Premiere Pro' },
  { abbr: 'Ma', name: 'Maya' },
  { abbr: 'Dv', name: 'DaVinci' },
  { abbr: 'Fg', name: 'Figma' },
  { abbr: 'Mj', name: 'Midjourney' },
  { abbr: 'Rw', name: 'Runway' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 48px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      {/* BG shapes */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,78,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div className="reveal">
            <span className="section-label">About Us</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, color: '#f5f5f5', marginBottom: 24 }}>
              Where Vision Meets{' '}
              <span className="gold-text">Innovation</span>
            </h2>

            <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#c8a84e', lineHeight: 1 }}>4+</div>
                <div style={{ fontSize: '0.75rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Years of Excellence</div>
              </div>
            </div>

            <p style={{ color: '#999', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' }}>
              Gamenic Virtual Studio is a cutting-edge IT firm pushing the boundaries of digital creativity. We specialize in Visual Effects (VFX), Virtual Production, UI/UX Design, Graphic Design, Animation, Video Editing, and LP Production — delivering end-to-end multimedia solutions that bring bold ideas to life.
            </p>
            <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem' }}>
              From concept to final pixel, we combine artistic vision with the latest technologies to craft experiences that captivate audiences and drive real results for our clients.
            </p>
          </div>

          {/* Right */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8a84e', marginBottom: 16 }}>Our Capabilities</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {capabilities.map(c => (
                  <span key={c} style={{
                    padding: '6px 14px', border: '1px solid rgba(200,168,78,0.3)',
                    borderRadius: 20, fontSize: '0.8rem', color: '#ccc',
                    background: 'rgba(200,168,78,0.05)',
                  }}>{c}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8a84e', marginBottom: 16 }}>Tools We Use</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {tools.map(t => (
                  <div key={t.name} title={t.name} style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: '#141414', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 700, color: '#c8a84e', letterSpacing: '0.05em',
                    cursor: 'default',
                  }}>
                    {t.abbr}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
