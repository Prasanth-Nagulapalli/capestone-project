import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { useScreenSize } from "../customHooks/ScreenSizeContext";

const FoodItem = ({ id, title, minImg, midImg, type, rating, price }) => {
  const [inView, setInView] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const { screenWidth } = useScreenSize().screenSize;
  const { addItems, deleteItems, groupedItems } = useScreenSize();

  const placeholderRef = useRef();

  useEffect(() => {
    let item = groupedItems.find((item) => item.name === id);
    if (item) {
      setItemCount(item.values.length);
    } else {
      setItemCount(0);
    }
  }, [id, groupedItems]);

  // useEffect(() => {
  //   try {
  //     const observer = new IntersectionObserver((entries, obs) => {
  //       console.log(typeof entries);

  //       for (const entry of entries) {
  //         if (entry.isIntersecting) {
  //           setInView(true);
  //           obs.disconnect()
  //         }
  //       }
  //     }, {})
  //    if(placeholderRef.current) {

  //      observer.observe(placeholderRef.current)
  //    }

  //     return () => {
  //       observer.disconnect();
  //     };
  //   } catch (error) {
  //     console.error("Error in IntersectionObserver:", error);
  //   }
  // }, []);

  useEffect(() => {
    let timeoutId;
    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setInView(true);
            obs.disconnect();
          }, 400);
        }
      }
    }, {});
    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <article className="order_online_card_main">
        <div className="order_online_card_content">
          {inView ? (
            <Link to={`/orderonline/${id}`}>
              <img src={midImg} alt="lemon" />
            </Link>
          ) : (
            <div
              className="image-wrapper shine order_online_image-wrapper"
              ref={placeholderRef}
            >
              <img
                src={minImg}
                alt="mini"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}

          <div className="order_online_item_rating_container">
            <Link to={`/orderonline/${id}`}>
              <h3>{title}</h3>
            </Link>
            <p>
              {rating}{" "}
              <span className="order_online_rating_i">
                <i className="fa-solid fa-star"></i>
              </span>
            </p>
          </div>
        </div>
        <footer>
          <div className="order_online_card_price_btn_container">
            <div className="order_online_card_item_type">
              <p>
                <ReactTyped
                  strings={["item type", type]}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={4000 - type.length * 100}
                  cursorChar="_"
                  loop
                />
              </p>
            </div>
            <div className="order_online_last_container">
              <p className="order_online_item_price">
                ₹ {price} {screenWidth < 400 && itemCount > 0 ? "" : "for one"}
              </p>

              {/* {itemCount > 0 && screenWidth >= 500 ? ( */}
              {itemCount > 0 && true ? (
                <div className="order_online_add_remove_btn">
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
                  className="order_online_add_btn _BTN_"
                  onClick={() => {
                    addItems(price, id);
                  }}
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        </footer>
      </article>
    </>
  );
};

export default FoodItem;
