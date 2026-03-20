'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('All fields are required');
      return;
    }
    setError('');
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: '#111', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6, padding: '14px 16px', color: '#f5f5f5', fontSize: '0.9rem',
    outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '120px 48px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 896, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <span className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#f5f5f5', marginBottom: 12 }}>
            Let&apos;s Create Something <span className="gold-text">Amazing</span>
          </h2>
          <p style={{ color: '#888', lineHeight: 1.7 }}>
            Ready to bring your vision to life? We&apos;d love to hear about your project.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48 }} className="reveal">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              { label: 'Location', value: 'Kathmandu, Boudha, Nepal', icon: '📍' },
              { label: 'Phone', value: '+977 9765970221', icon: '📞' },
              { label: 'Email', value: 'gamenicvirtualstudio@gmail.com', icon: '✉️' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: '0.7rem', color: '#c8a84e', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>{item.label}</div>
                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: 24 }}>
              Send us a message — we&apos;ll get back to you within 24 hours.
            </div>

            {sent ? (
              <div style={{ padding: '24px', background: 'rgba(200,168,78,0.08)', border: '1px solid rgba(200,168,78,0.3)', borderRadius: 8, color: '#c8a84e', textAlign: 'center' }}>
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(200,168,78,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(200,168,78,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <input placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,168,78,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <textarea placeholder="Message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,168,78,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                {error && <div style={{ color: '#e55', fontSize: '0.8rem' }}>{error}</div>}
                <button type="submit" style={{
                  background: '#c8a84e', color: '#0a0a0a',
                  border: 'none', padding: '14px', borderRadius: 6,
                  fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
