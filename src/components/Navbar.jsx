import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'About', 'Solutions', 'Services', 'Contact us']

  return (
    <nav className="flex items-center justify-between py-5 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl text-slate-800 flex-shrink-0">
        <div className="w-8 h-8 border-2 border-slate-800 flex items-center justify-center rounded-sm rotate-45">
          <span className="-rotate-45 text-sm font-black leading-none">A</span>
        </div>
        CraftHorizon
      </div>

      {/* Centered nav links — desktop */}
      <ul className="hidden md:flex items-center gap-8 text-slate-400 font-medium text-sm">
        {links.map(item => (
          <li key={item}>
            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right CTA buttons */}
      <div className="hidden md:flex items-center gap-5">
        <button className="text-slate-800 font-semibold text-sm hover:text-slate-600 transition-colors">
          Log in
        </button>
        <button className="border border-slate-300 rounded-full px-5 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-slate-50 transition-all duration-200">
          Sign up
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? (
            <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
          ) : (
            <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
          )}
        </svg>
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-lg px-6 py-4 flex flex-col gap-4 md:hidden">
          {links.map(item => (
            <a key={item} href="#" className="text-slate-600 text-sm font-medium py-1 border-b border-slate-50">
              {item}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <button className="text-slate-800 font-semibold text-sm">Log in</button>
            <button className="border border-slate-300 rounded-full px-5 py-2 flex items-center gap-2 text-sm font-semibold">
              Sign up <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
