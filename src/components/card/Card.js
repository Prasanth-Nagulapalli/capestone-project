import React from "react";
import cardCss from "./card.module.css";

const {card,cardImage,cardContent,cardHeadingPrice,cardTitle,cardPrice,cardDescription,orderDelivery,orderTitle} = cardCss


const Card = ({ id, img, heading, price, description }) => {
  return (
    <article className={card} id={id}>
      <figure className={cardImage}>
        <img src={img} alt={heading} />
      </figure>
      <section className={cardContent}>
        <header className={cardHeadingPrice}>
          <h2 className={cardTitle}>{heading}</h2>
          <span className={cardPrice}>{price}</span>
        </header>

        <p className={cardDescription}>{description}</p>

        <div className={orderDelivery}>
          <h2 className={orderTitle}>Order a delivery</h2>

          <button>
            <i className="fa-solid fa-car-side"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default Card;
