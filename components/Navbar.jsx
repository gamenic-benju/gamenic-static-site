'use client';
import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Services', 'Products', 'Blog', 'Career'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id.toLowerCase());
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,168,78,0.15)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 48px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#c8a84e', letterSpacing: '0.05em' }}>
            GAMENIC
          </span>
          <span style={{ fontSize: '0.65rem', color: '#888', display: 'block', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: -2 }}>Virtual Studio</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em',
              color: active === l.toLowerCase() ? '#c8a84e' : '#f5f5f5',
              opacity: active === l.toLowerCase() ? 1 : 0.8,
              transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}>{l}</button>
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => scrollTo('contact')} style={{
          background: 'transparent', border: '1px solid #c8a84e',
          color: '#c8a84e', padding: '10px 24px', borderRadius: 4,
          fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.background = '#c8a84e'; e.target.style.color = '#0a0a0a'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#c8a84e'; }}
          className="hidden-mobile"
        >
          Contact Us
        </button>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: '#f5f5f5', display: 'none',
        }} className="mobile-only">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.98)', padding: '24px 48px 32px',
          borderTop: '1px solid rgba(200,168,78,0.1)',
        }}>
          {[...links, 'Contact'].map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#f5f5f5', fontSize: '1.1rem', padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
