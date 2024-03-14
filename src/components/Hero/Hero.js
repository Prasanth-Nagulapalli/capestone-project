import React from 'react'
import './hero.css'
import HeroImg from '../../assets/HeroImage.jpg'
const Hero = () => {
  return (
    <section className='hero-section'>
        <section className='section-center'>

         <article>
            <section className='hero-text'>
            <header>
                <h1>Little Lemon</h1>
                <p>Chicago</p>
            </header>
              <p>We are a family owned mediteranean restaurant focused on traditional recipes served with a modern twist. </p>
              <button className='table-btn'>
                Reserve a Table
              </button>
            </section>
            <figure className='hero-img'>
                <img src={HeroImg} alt="" />
            </figure>
         </article>
        </section>
    </section>
  )
}

export default Hero