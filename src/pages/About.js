import React from "react";
import AboutSection from "../components/About";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
const About = () => {
  const { navbarHeight, footerHeight } = useScreenSize();
  return (
    <section style={{minHeight:`calc(100vh - ${navbarHeight + footerHeight}px)`}}>
      <AboutSection />
    </section>
  );
};

export default About;
