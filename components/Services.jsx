const services = [
  { icon: '◈', title: 'UI/UX Design', desc: 'User-centered digital interfaces that are intuitive, accessible, and beautifully crafted.' },
  { icon: '◉', title: 'AI Video & Image Generation', desc: 'High-quality videos and images using advanced AI tools, tailored to your creative vision.' },
  { icon: '◎', title: 'Animation', desc: '2D and 3D animation for commercials, explainers, character rigs, and cinematic sequences.' },
  { icon: '◇', title: 'LP Production', desc: 'End-to-end music production from recording and mixing to mastering and vinyl-ready delivery.' },
  { icon: '◆', title: 'Video Creation', desc: 'Professional video production from concept to final cut — filming, editing, motion graphics, and color grading.' },
  { icon: '▣', title: 'Graphic Design', desc: 'Brand identity, marketing materials, and visual content that communicates your message with impact.' },
  { icon: '⬡', title: 'Virtual Environments', desc: 'Immersive virtual spaces for showrooms, events, and interactive experiences powered by cutting-edge tech.' },
  { icon: '◐', title: '3D Modelling', desc: 'High-fidelity 3D models and digital sculptures for games, film, product design, and virtual production.' },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 48px', background: '#080808', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }} className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>Our Services</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5', marginBottom: 16 }}>
            What We <span className="gold-text">Offer</span>
          </h2>
          <p style={{ color: '#888', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            End-to-end creative solutions designed to elevate your brand and captivate your audience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}>
          {services.map((s, i) => (
            <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div style={{
                padding: '40px 32px', background: '#0d0d0d',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                height: '100%', transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#111'}
                onMouseLeave={e => e.currentTarget.style.background = '#0d0d0d'}
              >
                <div style={{ fontSize: '1.8rem', color: '#c8a84e', marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f5f5f5', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: '#c8a84e', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Learn More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
