const products = [
  { cat: 'Exterior', year: '2025', title: 'Autumn Garden Path Leading to a Serene Pavilion', tags: ['Textured'] },
  { cat: 'Interior', year: '2025', title: 'Cozy Mid-Century Living Room with Warm Evening Glow', tags: ['Textured'] },
  { cat: 'Interior', year: '2025', title: 'Vibrant Pink Neon Bar with Urban Nightclub Vibes', tags: ['Textured'] },
  { cat: 'Furniture', year: '2024', title: 'Minimalist Sculptural Chair in Natural Oak', tags: ['Textured', 'AR Ready'] },
  { cat: 'Product', year: '2024', title: 'Premium Electric Appliance Visualisation Series', tags: ['Textured'] },
  { cat: 'Nature', year: '2024', title: 'Detailed Bonsai Plant with Realistic Bark Texture', tags: ['Textured', 'PBR'] },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: '120px 48px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }} className="reveal">
          <div>
            <span className="section-label">Our Products</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5' }}>
              Our 3D <span className="gold-text">Creations</span>
            </h2>
          </div>
          <a href="#" style={{ color: '#c8a84e', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
            View All →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {products.map((p, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div style={{
                background: '#111', borderRadius: 8, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(200,168,78,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                {/* Placeholder image */}
                <div style={{
                  height: 220, background: `linear-gradient(135deg, #141414 0%, #1a1a1a 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                }}>
                  <div style={{ fontSize: '3rem', opacity: 0.15 }}>◈</div>
                  <div style={{ position: 'absolute', top: 16, left: 16 }}>
                    <span style={{ background: 'rgba(200,168,78,0.15)', border: '1px solid rgba(200,168,78,0.3)', color: '#c8a84e', padding: '4px 10px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 600 }}>{p.cat}</span>
                  </div>
                  <div style={{ position: 'absolute', top: 16, right: 16, color: '#666', fontSize: '0.75rem' }}>{p.year}</div>
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f5f5f5', marginBottom: 12, lineHeight: 1.4 }}>{p.title}</h3>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', color: '#666', border: '1px solid rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: 3 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
