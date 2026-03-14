import React, { useState } from 'react'

const IMAGES = [
  {
    id: 'large',
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80',
    alt: 'City tower building',
    tag: 'Commercial Tower',
    className: 'gallery__item gallery__item--large',
  },
  {
    id: 'medium',
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80',
    alt: 'Modern residential complex',
    tag: 'Residential Complex',
    className: 'gallery__item gallery__item--medium',
  },
  {
    id: 'sm1',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',
    alt: 'Industrial facility',
    tag: 'Industrial',
    className: 'gallery__item gallery__item--sm1',
  },
  {
    id: 'sm2',
    src: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=500&q=80',
    alt: 'Mixed-use development',
    tag: 'Mixed-use',
    className: 'gallery__item gallery__item--sm2',
  },
]

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const Gallery = () => {
  const [liked, setLiked] = useState({})

  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">

        {/* Header */}
        <div className="gallery__intro">
          <div>
            <span className="eyebrow">Our Portfolio</span>
            <h2>The Buildings We Have Created</h2>
          </div>
          <a href="#contact" className="btn-outline">Commission a Project</a>
        </div>

        {/* Masonry grid */}
        <div className="gallery__grid">
          {IMAGES.map(({ id, src, alt, tag, className }) => (
            <div key={id} className={className}>
              <img src={src} alt={alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-tag">{tag}</span>
              </div>
              <button
                className="gallery__icon-btn"
                aria-label={liked[id] ? 'Unlike' : 'Like'}
                onClick={() => toggleLike(id)}
                style={liked[id] ? { background: '#fee2e2' } : {}}
              >
                {liked[id]
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  : <HeartIcon />
                }
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery
