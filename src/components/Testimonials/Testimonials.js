import React from "react";
import { reviewData } from "../../utils/data";

const Testimonials = () => {
  return (
    <section className="testimonial_section">
      <h2 className="testimonial_heading">Testimonials</h2>
      <section className="testi_sec_center _max_width_center _flex_box">
        {reviewData.map((item) => {
          const { id, name, img, review } = item;
          return (
            <article className="testi_card" key={id}>
              <figure className="testi_img_el">
                <img src={img} alt={name} />
                <figcaption className="testi_img_caption">
                  <h3> {name}</h3>
                </figcaption>
              </figure>
              <div className="testi_text_content">
                <h3>Review</h3>
                <blockquote>{review}</blockquote>
              </div>
              <section className="testi_rating_section _flex_box">
                <h3>Rating </h3>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
              </section>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Testimonials;
