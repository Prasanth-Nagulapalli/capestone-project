import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from '../components/Testimonials'
import About from "../components//About";



const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;

// import React from 'react';
// const LazyHero = React.lazy(() => import('../components/Hero'));
// const LazyHighlights = React.lazy(() => import('../components/Highlights'));
// const LazyTestimonials = React.lazy(() => import('../components/Testimonials'));
// const LazyAbout = React.lazy(() => import('../components/About'))

// const Home = () => {
//   return(
//     <>
//     <LazyHero />
//     <LazyHighlights />
//     <LazyTestimonials />
//     <LazyAbout />

//     </>
//   )
// }

// export default Home
