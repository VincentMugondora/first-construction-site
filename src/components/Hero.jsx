import React from 'react'

const IMAGES = {
  tall:        'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  topRight:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80',
  bottomRight: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?w=500&q=80',
  inline:      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=120&q=80',
}

const Hero = () => (
  <section className="hero" id="hero">
    <div className="container hero__inner">

      {/* ── LEFT ── */}
      <div className="hero__left">
        <span className="eyebrow">⬛ Premier Construction Group</span>

        <h1 className="hero__heading">
          Let's Building Your{' '}
          <span style={{ whiteSpace: 'nowrap' }}>
            <span className="inline-icon">
              <img src={IMAGES.inline} alt="construction" />
            </span>
            Vision
          </span>
          {' '}Into Reality
        </h1>

        <p className="hero__sub">
          We transform architectural blueprints into landmark structures — delivering
          precision, craftsmanship, and excellence on every project.
        </p>

        <div className="hero__actions">
          <a href="#stats" className="btn-primary">
            Explore Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Get a Quote</a>
        </div>

        {/* Trust badge */}
        <div className="hero__badge">
          <div className="hero__badge-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div className="hero__badge-text">
            <strong>ISO 9001 Certified</strong>
            25+ Years of Trusted Excellence
          </div>
        </div>
      </div>

      {/* ── RIGHT — masonry grid ── */}
      <div className="hero__right">
        <div className="hero__img--tall">
          <img src={IMAGES.tall} alt="Modern high-rise building" loading="lazy" />
        </div>
        <div className="hero__img--top-right">
          <img src={IMAGES.topRight} alt="Construction site" loading="lazy" />
        </div>
        <div className="hero__img--bottom-right">
          <img src={IMAGES.bottomRight} alt="Architectural interior" loading="lazy" />
        </div>
      </div>

    </div>
  </section>
)

export default Hero
