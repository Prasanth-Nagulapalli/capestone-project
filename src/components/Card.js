import React from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";

const Card =  ({ id, img, heading, price, description }) => {
  const { screenWidth } = useScreenSize();

  return (
    <article className="specials_card" id={id}>
      <figure className="specials_card_img">
        <img className="specials_card_img_img" loading="lazy" src={img} alt={heading} />
        {screenWidth <= 768 && <button className="specials_card_img_button _BTN_">Add +</button>}
      </figure>
      <section className="specials_card_content">
        <header className="specials_card_heading_price _flex_box">
          <h3 className="specials_card_title">{heading}</h3>
          <span className="specials_card_price">{price}</span>
        </header>

        <p className="specials_card_desc">
          {screenWidth <= 500
            ? `${description.substring(0, 90)}...`
            : description}
        </p>

        <div className="special_order_delivery">
          <h2 className="special_order_title">Order a delivery</h2>

          <button className="special_order_delivery_button">
            <i className="fa-solid fa-car-side"></i>
          </button>
        </div>
      </section>
    </article>
  );
};

export default Card;
