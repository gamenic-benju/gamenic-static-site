export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#c8a84e', letterSpacing: '0.05em' }}>GAMENIC</div>
            <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 2 }}>Virtual Studio</div>
            <p style={{ color: '#555', fontSize: '0.8rem', marginTop: 12, maxWidth: 280, lineHeight: 1.6 }}>
              Pushing the boundaries of digital creativity through VFX, virtual production, and innovative design.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
              {['UI/UX Design', 'Animation', '3D Modelling', 'Video Creation', 'Graphic Design'].map(s => (
                <div key={s} style={{ color: '#555', fontSize: '0.8rem', marginBottom: 8 }}>{s}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
              {['About', 'Blog', 'Career', 'Contact'].map(s => (
                <div key={s} style={{ color: '#555', fontSize: '0.8rem', marginBottom: 8 }}>{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: '#444', fontSize: '0.75rem' }}>© {year} Gamenic Virtual Studio Pvt Ltd. All rights reserved.</span>
          <span style={{ color: '#444', fontSize: '0.75rem' }}>Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
