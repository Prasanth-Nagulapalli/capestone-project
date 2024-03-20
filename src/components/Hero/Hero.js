import React from "react";
import { HeroImg } from "../../utils";
const Hero = () => {
  return (
    <section className="hero_section">
      <section className="hero_sec_center">
        <article className="hero_article _max_width_center _flex_box">
          <section className="hero_text _flex_box">
            <header>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </header>
            <p>
              We are a family owned mediteranean restaurant focused on
              traditional recipes served with a modern twist.{" "}
            </p>
            <button className="reserve_btn">Reserve a Table</button>
          </section>
          <figure className="hero_Img">
            <img src={HeroImg} alt="hero Img" />
          </figure>
        </article>
      </section>
    </section>
  );
};

export default Hero;
