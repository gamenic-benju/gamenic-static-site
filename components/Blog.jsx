const posts = [
  {
    cat: 'AI & Innovation',
    date: 'Feb 24, 2026',
    title: 'How Gamenic Leverages AI to Revolutionize 3D Asset Pipelines',
    excerpt: 'From AI-assisted texturing to procedural generation, discover how our studio integrates machine learning into every stage of 3D content creation.',
  },
  {
    cat: 'AR Product Visualization',
    date: 'Oct 5, 2025',
    title: 'AR Product Visualization: Transforming E-Commerce for Our Clients',
    excerpt: 'How Gamenic helped retail brands boost conversions by 40% with interactive augmented reality product previews built on WebXR and Three.js.',
  },
  {
    cat: 'Studio',
    date: 'Aug 19, 2025',
    title: 'Scaling a Creative Studio: How We Built a Remote-First 3D Team',
    excerpt: 'Lessons learned from growing Gamenic\'s team across time zones while maintaining AAA-quality output through async workflows and cloud rendering.',
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: '120px 48px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }} className="reveal">
          <div>
            <span className="section-label">Blog</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5' }}>
              Latest <span className="gold-text">Insights</span>
            </h2>
            <p style={{ color: '#888', marginTop: 8, fontSize: '0.9rem' }}>Explore our thoughts on technology, design, and the future of digital experiences.</p>
          </div>
          <a href="#" style={{ color: '#c8a84e', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
            All Articles →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {posts.map((p, i) => (
            <article key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, overflow: 'hidden', height: '100%',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,168,78,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Image placeholder */}
                <div style={{ height: 180, background: 'linear-gradient(135deg, #111 0%, #161616 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '2rem', opacity: 0.1 }}>◈</div>
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.cat}</span>
                    <span style={{ fontSize: '0.75rem', color: '#555' }}>{p.date}</span>
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5f5f5', marginBottom: 12, lineHeight: 1.5 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.7, marginBottom: 20 }}>{p.excerpt}</p>
                  <span style={{ fontSize: '0.75rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Read Article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
