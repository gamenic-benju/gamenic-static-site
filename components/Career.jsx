const jobs = [
  {
    title: 'UI/UX Designer',
    type: 'Full-Time',
    dept: 'Design & UX',
    location: 'Kathmandu, Nepal',
    exp: '3+ Years',
    desc: 'We\'re seeking a talented UI/UX Designer who combines strong visual design skills with deep user empathy. You\'ll craft intuitive and beautiful experiences.',
  },
  {
    title: 'AI Prompt Engineer',
    type: 'Full-Time',
    dept: 'AI & Innovation',
    location: 'Kathmandu, Nepal',
    exp: '1+ Years',
    desc: 'We\'re looking for a creative and technically skilled AI Prompt Engineer to join our AI & Innovation team to push the limits of generative content.',
  },
];

export default function Career() {
  return (
    <section id="career" style={{ padding: '120px 48px', background: '#080808' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 20 }} className="reveal">
          <div>
            <span className="section-label">Career</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5' }}>
              Build the Future of <span className="gold-text">Creativity</span>
            </h2>
            <p style={{ color: '#888', marginTop: 8, fontSize: '0.9rem', maxWidth: 500 }}>
              Explore open roles and join our team of passionate creatives, engineers, and innovators.
            </p>
          </div>
          <a href="#" style={{ color: '#c8a84e', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
            All Openings →
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {jobs.map((job, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8, padding: '32px 40px',
                display: 'grid', gridTemplateColumns: '1fr auto',
                gap: 24, alignItems: 'center',
                transition: 'border-color 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,168,78,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f5f5f5' }}>{job.title}</h3>
                    <span style={{ padding: '2px 10px', background: 'rgba(200,168,78,0.1)', border: '1px solid rgba(200,168,78,0.3)', color: '#c8a84e', fontSize: '0.7rem', fontWeight: 600, borderRadius: 20 }}>{job.type}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
                    {[job.dept, job.location, job.exp].map(meta => (
                      <span key={meta} style={{ fontSize: '0.78rem', color: '#666' }}>• {meta}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6 }}>{job.desc}</p>
                </div>
                <button style={{
                  padding: '12px 24px', border: '1px solid rgba(200,168,78,0.4)',
                  background: 'transparent', color: '#c8a84e',
                  borderRadius: 4, fontSize: '0.78rem', fontWeight: 600,
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.background = '#c8a84e'; e.target.style.color = '#0a0a0a'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#c8a84e'; }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #career .job-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
