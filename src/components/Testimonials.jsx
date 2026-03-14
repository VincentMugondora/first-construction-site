import React, { useState } from 'react'

const TESTIMONIALS = [
  {
    id: 0,
    quote: "BuildCraft delivered our headquarters project three weeks ahead of schedule and under budget. Their attention to structural detail and commitment to material quality is second to none. I wouldn't trust any other firm with our future expansions.",
    name: 'Jonathan Mercer',
    role: 'CEO, Meridian Investments',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    portrait: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80',
  },
  {
    id: 1,
    quote: "From the initial concept to the final handover, BuildCraft's team communicated every step of the way. The mixed-use complex they delivered has already won two regional architecture awards — an absolute masterpiece.",
    name: 'Sophia Okonkwo',
    role: 'Director, Prestige Developments',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    portrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
]

const Stars = () => (
  <div className="testimonial__stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="testimonial__star">★</span>
    ))}
  </div>
)

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow">What Clients Say</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginTop: '0.25rem' }}>
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="testimonials__inner">

          {/* ── LEFT — quote card ── */}
          <div>
            <div className="testimonial__card">
              <div className="testimonial__quote-mark">"</div>
              <Stars />
              <p className="testimonial__text">"{t.quote}"</p>
              <div className="testimonial__author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial__avatar"
                  style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Dot nav */}
            <div className="testimonials__nav">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={i === active ? 'active' : ''}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT — portrait ── */}
          <div className="testimonials__portrait">
            <div className="testimonials__portrait-img">
              <img src={t.portrait} alt={t.name} loading="lazy" />
            </div>
            <div className="testimonials__portrait-badge">
              <div className="badge-num">500+</div>
              <div className="badge-label">Satisfied Clients</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
