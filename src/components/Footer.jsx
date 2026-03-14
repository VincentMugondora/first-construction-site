import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <a href="#" className="footer__logo">Build<span>Craft</span></a>

      <ul className="footer__links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#stats">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonials">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p className="footer__copy">© {new Date().getFullYear()} BuildCraft. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
