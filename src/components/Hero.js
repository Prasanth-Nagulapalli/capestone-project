import React from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { HeroImg } from "../utils";
const Hero = () => {
  const { screenWidth } = useScreenSize();

  return (
    <section className="hero_section">
      <section className="hero_sec_center">
        <article className="hero_article _max_width_center _flex_box">
          <section className="hero_text _flex_box">
            <header>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </header>
            <div className="hero_div" >
              <p>
                We are a family owned mediteranean restaurant focused on
                traditional recipes served with a modern twist.{" "}
              </p>
              {screenWidth <= 500 && (
                <figure className="hero_Img">
                  <img loading="lazy" src={HeroImg} alt="hero Img" />
                </figure>
              )}
            </div>
            <button className="reserve_btn">Reserve a Table</button>
          </section>
          {screenWidth > 500 && (
            <figure className="hero_Img">
              <img loading="lazy" src={HeroImg} alt="hero Img" />
            </figure>
          )}
        </article>
      </section>
    </section>
  );
};

export default Hero;
