'use client';
import { useState, useEffect } from 'react';

const slides = [
  { label: 'VFX & Visual Production', title: 'Where Vision\nMeets Innovation', sub: 'Crafting high-impact visuals through cutting-edge technology and artistic excellence.' },
  { label: 'UI/UX Design', title: 'Interfaces That\nInspire & Convert', sub: 'User-centered digital experiences that are intuitive, accessible, and beautifully crafted.' },
  { label: '3D Modelling & Animation', title: 'Bringing Digital\nWorlds to Life', sub: 'High-fidelity 3D models and animations for games, film, and virtual production.' },
  { label: 'AI & Innovation', title: 'Powered by\nArtificial Intelligence', sub: 'Leveraging the latest AI tools to revolutionize creative pipelines and content production.' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative', height: '100vh', minHeight: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: '#0a0a0a',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(200,168,78,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,78,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, transparent 40%, rgba(10,10,10,0.8) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 60%)' }} />

      {/* Floating shapes */}
      <div style={{
        position: 'absolute', top: '20%', right: '15%', zIndex: 3,
        width: 200, height: 200, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        border: '1px solid rgba(200,168,78,0.2)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '25%', right: '25%', zIndex: 3,
        width: 100, height: 100,
        border: '1px solid rgba(200,168,78,0.15)',
        transform: 'rotate(45deg)',
        animation: 'float2 6s ease-in-out infinite',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%', zIndex: 1,
        background: 'radial-gradient(circle, rgba(200,168,78,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'left', padding: '0 48px', maxWidth: 1280, width: '100%', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: '#c8a84e' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8a84e' }}>
            {slides[current].label}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700, lineHeight: 1.1,
          color: '#f5f5f5', marginBottom: 24,
          whiteSpace: 'pre-line',
          animation: 'fadeInUp 0.6s ease forwards',
        }}>
          {slides[current].title}
        </h1>

        <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: '#aaa', maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
          {slides[current].sub}
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#c8a84e', color: '#0a0a0a',
              border: 'none', padding: '14px 32px', borderRadius: 4,
              fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
            Our Services
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent', color: '#f5f5f5',
              border: '1px solid rgba(255,255,255,0.2)', padding: '14px 32px', borderRadius: 4,
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
            Get In Touch
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: 8 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 32 : 8, height: 8, borderRadius: 4,
            background: i === current ? '#c8a84e' : 'rgba(255,255,255,0.2)',
            border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: 40, right: 48, zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #c8a84e, transparent)' }} />
      </div>
    </section>
  );
}
