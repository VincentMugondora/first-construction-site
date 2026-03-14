import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App