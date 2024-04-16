import React, { Suspense } from "react";
import Loading from "../components/Loading";
const LazyHero = React.lazy(() => import("../components/Hero"));
const LazyHighlights = React.lazy(() => import("../components/Highlights"));
const LazyTestimonials = React.lazy(() => import("../components/Testimonials"));
const LazyAbout = React.lazy(() => import("../components/About"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LazyHero />
        <LazyHighlights />
        <LazyTestimonials />
        <LazyAbout />
      </Suspense>
    </>
  );
};

export default Home;
