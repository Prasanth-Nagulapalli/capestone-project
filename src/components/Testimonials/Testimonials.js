import React from "react";
import { reviewData } from "../../utils/data";
import TestimonalsCss from "./testimonials.module.css";
const {
  testimonialSection,
  card,
  ratingSection,
  sectionCenter,
  figure,
  textContent,
  figCaption,
} = TestimonalsCss;

const Testimonials = () => {
  return (
    <section className={testimonialSection}>
      <h1>Testimonials</h1>
      <section className={sectionCenter}>
        {reviewData.map((item) => {
          const { id, name, img, review } = item;
          return (
            <article className={card} key={id}>
              <figure className={figure}>
                <img src={img} alt={name} />
                <figcaption className={figCaption}>
                  <h2> {name}</h2>
                </figcaption>
              </figure>
              <div className={textContent}>
                <h2>Review</h2>
                <blockquote>{review}</blockquote>
              </div>
              <section className={ratingSection}>
                <h2>Rating </h2>
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
