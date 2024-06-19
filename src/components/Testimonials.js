import React from "react";
import { reviewData } from "../utils/data";

const Testimonials = () => {
  return (
    <section className="testimonial_section">
      <h2 className="testimonial_heading">Testimonials</h2>
      <section className="testi_sec_center _max_width_center _flex_box">
        {reviewData.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </section>
    </section>
  );
};
export default Testimonials;

const Testimonial = ({ id, name, midImg, review }) => {
  return (
    <article className="testi_card" key={id}>
      <figure className="testi_img_el">
        <img
          loading="lazy"
          src={midImg}
          alt={name}
          className="testi_img_el_img"
        />
        <figcaption className="testi_img_caption">
          <h3 className="testi_img_caption_h3">{name}</h3>
        </figcaption>
      </figure>
      <div className="testi_text_content">
        <h3 className="testi_text_content_h3">Review</h3>
        <blockquote className="testi_text_content_blockquote">
          {review}
        </blockquote>
      </div>
      <section className="testi_rating_section _flex_box">
        <h3 className="testi_rating_section_h3">Rating </h3>
        <Stars />
      </section>
    </article>
  );
};

const Stars = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <i className="fa-solid fa-star testi_rating_section_i"></i>
        </span>
      ))}
    </>
  );
};
