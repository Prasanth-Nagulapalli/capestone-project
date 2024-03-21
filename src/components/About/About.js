import React from "react";
import { rest1, rest2 } from "../../utils";

const About = () => {
  return (
    <section className="about_section _max_width_center">
      <section className="about_text_content">
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
      <section className="about_image_content">
        <figure className="about_fig1">
          <img src={rest1} alt="rest1" width={272} height={338} />
        </figure>
        <figure className="about_fig2">
          <img src={rest2} alt="rest2" width={272} height={338} />
        </figure>
      </section>
    </section>
  );
};

export default About;
