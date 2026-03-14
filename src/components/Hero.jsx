import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const IMGS = {
  pill:       'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=200&q=80',
  bottomLeft: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80',
  middle:     'https://images.unsplash.com/photo-1587162146766-e06b1189b907?w=700&q=80',
  right:      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
}

const Hero = () => {
  return (
    <section className="bg-white pt-10 pb-16 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* ── LEFT COLUMN (col-span-5) ── */}
        <div className="lg:col-span-5 flex flex-col gap-5">

          {/* Heading with inline pill */}
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#111827] leading-[1.08] tracking-tight">
            Let's Building{' '}
            <span
              className="inline-flex items-center align-middle overflow-hidden bg-blue-500"
              style={{
                width: '6.75rem',
                height: '2.9rem',
                borderRadius: '9999px',
                verticalAlign: 'middle',
                display: 'inline-flex',
                flexShrink: 0,
                margin: '0 0.15rem',
              }}
            >
              <img src={IMGS.pill} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </span>{' '}
            Your Vision Into Reality.
          </h1>

          {/* Sub-text */}
          <p className="text-slate-400 text-base leading-relaxed max-w-[300px]">
            Where Precision Meets Passion, Building Tomorrow's Landscape with Innovation and Excellence
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-[#111827] text-white rounded-full px-6 py-3 flex items-center gap-1.5 text-sm font-semibold hover:bg-slate-700 transition-all">
              Lean more <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>
            <button className="border border-slate-300 rounded-full px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all">
              Contact us
            </button>
          </div>

          {/* Bottom landscape image */}
          <div
            className="w-full overflow-hidden mt-3"
            style={{ height: '200px', borderRadius: '1.5rem' }}
          >
            <img src={IMGS.bottomLeft} alt="Low-angle building" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>

        </div>

        {/* ── MIDDLE COLUMN (col-span-4) — offset lower ── */}
        <div className="lg:col-span-4 lg:pt-[11rem]">
          <div
            className="w-full overflow-hidden shadow-xl"
            style={{ height: '520px', borderRadius: '3rem' }}
          >
            <img src={IMGS.middle} alt="Modern condo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
        </div>

        {/* ── RIGHT COLUMN (col-span-3) — starts at top ── */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <div
            className="w-full overflow-hidden shadow-lg"
            style={{ height: '380px', borderRadius: '2rem' }}
          >
            <img src={IMGS.right} alt="Glass tower" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>

          {/* Caption */}
          <div className="flex flex-col gap-3">
            <p className="text-slate-500 text-base leading-snug">
              Cultivating Tomorrow's Eden,<br />
              Where Nature and Design<br />
              Converge in Harmony
            </p>
            <button
              className="self-start font-semibold text-slate-800 text-sm pb-0.5 transition-all"
              style={{ borderBottom: '1.5px solid #cbd5e1' }}
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
}

export default Hero