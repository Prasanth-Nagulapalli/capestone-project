import React from "react";

const Card = ({ id, img, heading, price, description }) => {
  return (
    <article className="specials_card" id={id}>
      <figure className="specials_card_img">
        <img src={img} alt={heading} />
      </figure>
      <section className="specials_card_content">
        <header className="specials_card_heading_price _flex_box">
          <h3 className="specials_card_title">{heading}</h3>
          <span className="specials_card_price">{price}</span>
        </header>

        <p className="specials_card_desc">{description}</p>

        <div className="special_order_delivery">
          <h2 className="special_order_title">Order a delivery</h2>

          <button>
            <i className="fa-solid fa-car-side"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default Card;
