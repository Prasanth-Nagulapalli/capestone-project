import React from "react";
import { rest1_mid, rest2_mid } from "../utils";

const About = () => {
  return (
    <section className="about_section _max_width_center">
      <section className="about_text_content" >
        <header>
          <h1 className="about_text_content_header_h1">Little Lemon</h1>
          <h2 className="about_text_content_header_h2">Chicago</h2>
        </header>
        <p className="about_text_content_p">
          Located in Chicago, Little Lemon is renowned for its delectable dishes
          made from fresh, local ingredients. Offering a cozy ambiance and
          attentive service, it's an ideal destination for casual dining or
          memorable gatherings. Enjoy delicious cuisine and delightful moments
          at Little Lemon.
        </p>
      </section>
      <section className="about_image_content">
        <figure className="about_image_content_figure">
          <img
            className="about_image_img  about_fig1"
            loading="lazy"
            src={rest1_mid}
            alt="rest1"
          />
          <img
            className="about_image_img  about_fig2"
            loading="lazy"
            src={rest2_mid}
            alt="rest2"
          />
        </figure>
      </section>
    </section>
  );
};

export default About;
