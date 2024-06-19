import React, { useState, useEffect } from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ id, midImg, heading, price, description }) => {
  const { screenWidth } = useScreenSize().screenSize;
  const { addItems, deleteItems, groupedItems } = useScreenSize();
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);
  const [showmore, setShowMore] = useState(false);
  useEffect(() => {
    let item = groupedItems.find((item) => item.name === id);
    if (item) {
      setItemCount(item.values.length);
    } else {
      setItemCount(0);
    }
  }, [id, groupedItems]);

  const handleShowMore = () => {
    setShowMore(!showmore);
  };

  return (
    <article className="specials_card" id={id}>
      <figure className="specials_card_img">
        <Link to={`/orderonline/${id}`}>
          <img
            className="specials_card_img_img"
            loading="lazy"
            src={midImg}
            alt={heading}
          />
        </Link>
        {screenWidth <= 768 &&
          (itemCount > 0 ? (
            <div className="order_online_add_remove_btn_in_card">
              <button
                className=""
                onClick={() => {
                  deleteItems(price, id);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <span>{itemCount}</span>
              <button
                className=""
                onClick={() => {
                  addItems(price, id);
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          ) : (
            <button
              className="specials_card_img_button _BTN_"
              onClick={() => {
                addItems(price, id);
              }}
            >
              Add +
            </button>
          ))}
      </figure>
      <section className="specials_card_content">
        <header
          className="specials_card_heading_price _flex_box"
          style={showmore ? { marginBottom: "1rem" } : {}}
        >
          <h3
            className="specials_card_title"
            style={showmore ? { fontSize: "1.5rem" } : {}}
          >
            {heading}
          </h3>
          <span className="specials_card_price">₹ {price}</span>
        </header>

        <p className="specials_card_desc">
          {screenWidth >= 768 ? (
            <>
              {showmore ? description : description.substring(0, 80)}

              <span className="specials_card_showmore" onClick={handleShowMore}>
                {showmore ? "Showless" : "Showmore"}
              </span>
            </>
          ) : screenWidth <= 600 ? (
            `${description.substring(0, 80)} ...`
          ) : (
            description
          )}
        </p>
        {!showmore && (
          <div className="special_order_delivery">
            <h2
              className="special_order_title"
              onClick={() => navigate("/orderonline")}
            >
              Order a delivery
            </h2>

            <button className="special_order_delivery_button">
              <i className="fa-solid fa-car-side"></i>
            </button>
          </div>
        )}
      </section>
    </article>
  );
};

export default Card;
