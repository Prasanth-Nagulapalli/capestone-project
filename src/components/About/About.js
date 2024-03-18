import React from "react";
import aboutCss from "./about.module.css";
import {rest1, rest2} from '../../utils'

const About = () => {
  const { about, textContent, imageContent, fig1, fig2 } = aboutCss;

  return (
    <section className={about}>
      <section className={textContent}>
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          veritatis, ut voluptatum illo reprehenderit distinctio dolorem, atque
          libero earum nihil nemo tenetur? Ut officiis fugit, aperiam asperiores
          iste blanditiis necessitatibus soluta quibusdam quae, expedita
          molestiae.
        </p>
      </section>
      <section className={imageContent}>
        <figure className={fig1}>
          <img src={rest1} alt="" width={272} height={338} />
        </figure>
        <figure className={fig2}>
          <img src={rest2} alt="" width={272} height={338} />
        </figure>
      </section>
    </section>
  );
};

export default About;
