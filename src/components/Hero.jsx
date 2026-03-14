import React from 'react'
import { ArrowUpRight } from 'lucide-react'

/* ── High-quality Unsplash images ── */
const IMGS = {
  pill:       'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&q=80',
  bottomLeft: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80',
  middle:     'https://images.unsplash.com/photo-1587162146766-e06b1189b907?w=700&q=80',
  right:      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
}

const Hero = () => (
  <section className="bg-white pb-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto overflow-hidden">

    {/* ── 12-column hero grid ── */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

      {/* ──────────── LEFT COLUMN (col-span-5) ──────────── */}
      <div className="lg:col-span-5 flex flex-col gap-7">

        {/* Heading with inline pill badge */}
        <h1 className="text-5xl md:text-6xl lg:text-[5.25rem] font-black text-slate-900 leading-[1.07] tracking-tight">
          Let's Building{' '}
          {/* Pill badge */}
          <span
            className="inline-flex items-center align-middle overflow-hidden bg-blue-500"
            style={{
              width: '7rem',
              height: '3rem',
              borderRadius: '9999px',
              margin: '0 0.3rem',
              verticalAlign: 'middle',
              flexShrink: 0,
            }}
          >
            <img
              src={IMGS.pill}
              alt="building"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </span>{' '}
          Your Vision Into Reality.
        </h1>

        {/* Sub-text */}
        <p className="text-slate-400 max-w-xs text-base leading-relaxed">
          Where Precision Meets Passion, Building Tomorrow's Landscape with
          Innovation and Excellence
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-slate-900 text-white rounded-full px-7 py-3.5 flex items-center gap-2 text-sm font-semibold hover:bg-slate-700 transition-all duration-200">
            Learn more <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
          <button className="border border-slate-200 rounded-full px-7 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all duration-200">
            Contact us
          </button>
        </div>

        {/* Bottom landscape image */}
        <div
          className="w-full overflow-hidden shadow-md"
          style={{ height: '13rem', borderRadius: '2rem', marginTop: '1rem' }}
        >
          <img
            src={IMGS.bottomLeft}
            alt="Low-angle architecture"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>

      {/* ──────────── MIDDLE COLUMN (col-span-4) ──────────── */}
      <div className="lg:col-span-4 lg:pt-20">
        <div
          className="w-full overflow-hidden shadow-2xl"
          style={{ height: '600px', borderRadius: '3.5rem' }}
        >
          <img
            src={IMGS.middle}
            alt="Main building"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>

      {/* ──────────── RIGHT COLUMN (col-span-3) ──────────── */}
      <div className="lg:col-span-3 flex flex-col gap-5">
        <div
          className="w-full overflow-hidden shadow-lg"
          style={{ height: '500px', borderRadius: '3.5rem' }}
        >
          <img
            src={IMGS.right}
            alt="Glass tower"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>

        {/* Caption + Learn More */}
        <div className="flex flex-col gap-3 pl-1">
          <p className="text-slate-400 text-base leading-snug">
            Cultivating Tomorrow's Eden, Where Nature and Design Converge in Harmony
          </p>
          <button
            className="self-start font-bold text-slate-800 text-sm pb-0.5 hover:border-slate-800 transition-all duration-200"
            style={{ borderBottom: '2px solid #cbd5e1' }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#1e293b'}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = '#cbd5e1'}
          >
            Learn More
          </button>
        </div>
      </div>

    </div>
  </section>
)

export default Hero
