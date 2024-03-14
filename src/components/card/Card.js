import React from "react";
import "./card.css";

const Card = ({ id, img, heading, price, description }) => {
  return (
    <article className="card" key={id}>
      <figure className="card-image">
        <img src={img} alt="Greek Salad" />
      </figure>
      <section className="card-content">
        <header className="card-heading-price">
          <h2 className="card-title">{heading}</h2>
          <span className="card-price">{price}</span>
        </header>

        <p className="card-description">{description}</p>

        <div className="order-delivery">
          <h2 className="order-title">Order a delivery</h2>

          <button>
            <i class="fa-solid fa-car-side"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default Card;
