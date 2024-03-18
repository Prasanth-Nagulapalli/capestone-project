import React from 'react'
import Hero from '../components/Hero/Hero'
import Highlights from '../components/highlights/Highlights'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  )
}

export default Home