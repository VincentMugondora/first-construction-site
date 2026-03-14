import React from 'react'

const STATS = [
  { number: '17K', suffix: '+', label: 'Projects Completed' },
  { number: '25',  suffix: '+', label: 'Years of Experience' },
  { number: '98',  suffix: '%', label: 'Client Satisfaction' },
  { number: '340', suffix: '+', label: 'Expert Engineers' },
]

const VIDEO_IMG = 'https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?w=800&q=80'

const Stats = () => (
  <section className="stats section-padding" id="stats">
    <div className="container stats__inner">

      {/* ── LEFT — stat cards ── */}
      <div className="stats__left">
        <div>
          <span className="eyebrow">By The Numbers</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginTop: '0.25rem' }}>
            Builders Shaping Tomorrow
          </h2>
        </div>

        <div className="stats__grid">
          {STATS.map(({ number, suffix, label }) => (
            <div key={label} className="stats__card">
              <div className="stats__number">
                {number}<span>{suffix}</span>
              </div>
              <div className="stats__label">{label}</div>
            </div>
          ))}
        </div>

        <a href="#gallery" className="stats__cta-link">
          View Our Portfolio
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* ── RIGHT — text + video card ── */}
      <div className="stats__right">
        <div className="stats__text-block">
          <span className="eyebrow">Our Story</span>
          <h2>Engineering Excellence, Delivered on Time</h2>
          <p>
            For over two decades, BuildCraft has stood at the forefront of the construction
            industry — combining cutting-edge engineering methods with a relentless commitment
            to quality. From high-rise towers to bespoke residential estates, our team brings
            every client's vision to life with precision and care.
          </p>
          <p>
            We don't just build structures. We build legacies that stand the test of time,
            raise city skylines, and create spaces where communities thrive.
          </p>
        </div>

        {/* Video card */}
        <div className="video-card">
          <img src={VIDEO_IMG} alt="Construction project timelapse" loading="lazy" />
          <div className="video-card__overlay">
            <div className="video-card__play">
              <div className="video-card__play-icon" />
            </div>
            <span className="video-card__label">Watch Our Story</span>
          </div>
        </div>
      </div>

    </div>
  </section>
)

export default Stats
