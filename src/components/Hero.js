import React from "react";
import { HeroImg } from "../utils";
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
            <div className="hero_div">

            <p>
              We are a family owned mediteranean restaurant focused on
              traditional recipes served with a modern twist.{" "}
            </p>
            <figure className="hero_Img showImg">
            <img loading="lazy" src={HeroImg} alt="hero Img" />
          </figure>
            </div>
            <button className="reserve_btn">Reserve a Table</button>
            
          </section>
          <figure className="hero_Img hideImg">
            <img loading="lazy" src={HeroImg} alt="hero Img" />
          </figure>
        </article>


    
      </section>
    </section>
  );
};

export default Hero;
