import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          Build<span>Craft</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          <li><a href="#about">About</a></li>
          <li><a href="#stats">Our Work</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Clients</a></li>
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar__cta">Get a Quote</a>

        {/* Mobile hamburger */}
        <button
          className="navbar__mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          background: 'rgba(26,32,44,0.98)',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {['About', 'Our Work', 'Gallery', 'Clients'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                padding: '0.25rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
