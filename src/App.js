import React, { Suspense, lazy, useEffect } from "react";
import Loading from "./components/Loading";
import Lenis from "@studio-freight/lenis";

const Header = lazy(() => import("./components/Header"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
