import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['Home', 'About', 'Solutions', 'Services', 'Contact us']

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl text-slate-900 flex-shrink-0">
        <div className="w-8 h-8 border-2 border-slate-900 flex items-center justify-center rounded-sm rotate-45 bg-white">
          <span className="-rotate-45 text-sm font-black leading-none translate-y-[-1px]">A</span>
        </div>
        CraftHorizon
      </div>

      {/* Centered nav links */}
      <ul className="hidden md:flex items-center gap-10 text-slate-500 font-medium text-sm">
        {links.map(item => (
          <li key={item}>
            <a href="#" className="hover:text-slate-900 transition-colors duration-200">{item}</a>
          </li>
        ))}
      </ul>

      {/* Right CTA */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-slate-900 font-bold text-sm hover:text-slate-600 transition-colors">
          Log in
        </button>
        <button className="border border-slate-300 rounded-full px-6 py-2.5 flex items-center gap-2 text-sm font-bold hover:bg-slate-50 transition-all duration-200">
          Sign up
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="space-y-1.5 p-2">
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-slate-900 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden border-t">
          {links.map(item => (
            <a key={item} href="#" className="text-lg font-bold text-slate-800">{item}</a>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <button className="bg-slate-900 text-white rounded-full py-4 font-bold">Sign up</button>
            <button className="font-bold py-2">Log in</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar