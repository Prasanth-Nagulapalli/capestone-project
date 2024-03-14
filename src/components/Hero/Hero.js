import React from "react";
import HeroCss from "./hero.module.css";
import HeroImg from "../../assets/HeroImage.jpg";
const Hero = () => {
  const {
    heroSection,
    sectionCenter,
    heroArticle,
    heroText,
    tableBtn,
    heroImg,
  } = HeroCss;

  return (
    <section className={heroSection}>
      <section className={sectionCenter}>
        <article className={heroArticle}>
          <section className={heroText}>
            <header>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </header>
            <p>
              We are a family owned mediteranean restaurant focused on
              traditional recipes served with a modern twist.{" "}
            </p>
            <button className={tableBtn}>Reserve a Table</button>
          </section>
          <figure className={heroImg}>
            <img src={HeroImg} alt="hero Img" />
          </figure>
        </article>
      </section>
    </section>
  );
};

export default Hero;
