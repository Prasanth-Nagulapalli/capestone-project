import React from "react";
import TestimonalsCss from "./testimonials.module.css";
import { groot, superMan, stefan, Jake } from "../../utils";

const {
  testimonialSection,
  card,
  ratingSection,
  sectionCenter,
  figure,
  textContent,
  figCaption,
} = TestimonalsCss;

const reviewData = [
  {
    id: "abc",
    name: "Groot",
    img: groot,
    review: "Delicious food served in a cozy ambiance, great experience.",
  },
  {
    id: "cca",
    name: "Superman",
    img: superMan,
    review: "Tasty dishes, cozy vibe, highly recommended spot.",
  },
  {
    id: "zzz",
    name: "Štefan Štefančík",
    img: stefan,
    review: "Yummy food, friendly staff, definitely worth trying.",
  },
  {
    id: "www",
    name: "Jake Nackos",
    img: Jake,
    review:
      "Outstanding cuisine, attentive staff, perfect spot for any occasion.",
  },
];

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
