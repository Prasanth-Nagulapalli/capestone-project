import React, { useEffect, useState } from "react";
import "../styles/single_component.css";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { useParams } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import fooditems from "../utils/foodItems";

const SingleComponent = () => {
  const params = useParams();
  const { screenWidth, navbarHeight, footerHeight } = useScreenSize();
  const [data, setData] = useState([]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (document.readyState === "complete") {
    setTimeout(() => {
      handleScrollToTop();
    }, 300);
  }

  const filterItems = fooditems.find(
    (item) => item.id.toString() === params.id
  );

  useEffect(() => {
    if (filterItems) {
      setData(filterItems);
    }
  }, [filterItems]);

  const { img, title, price, type, rating } = data;

  return (
    <main
      className="single_component_main _max_width_center"
      style={{ minHeight: `calc(100vh - ${navbarHeight + footerHeight}px)` }}
    >
      <div className="single_component_container">
        <section className="single_component_img_container">
          <figure>
            <img src={img} alt={title} />
          </figure>
        </section>
        <section className="single_component_content_container max_center">
          <h2 className="single_component_item_name">
            <MdFastfood className="single_component_item_icon" /> {title}
          </h2>
          <div className="single_component_content_para">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              dicta quod amet sint vero. Voluptates, odit voluptas! Ipsa rem
              ullam ab optio iusto quaerat blanditiis accusantium nesciunt
              porro? Enim quaerat autem ducimus, repellat ad voluptatum error
              totam nulla perferendis mollitia?
            </p>
          </div>
          {screenWidth >= 800 && (
            <section className="single_component_content_details_container">
              <div className="single_component_content_details">
                <div>
                  <p>Name: {title}</p>
                  <p>$ {price} for one</p>
                </div>
                <div>
                  <p>
                    item type : <span>{type}</span>{" "}
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="single_component_rating">
                      {rating} <i className="fa-solid fa-star"></i>
                    </span>{" "}
                  </p>
                </div>
              </div>
              <button>
                {" "}
                Add To Cart{" "}
                <span
                  style={{
                    position: "absolute",
                    right: "0.5rem",
                    padding: "0 1rem",
                  }}
                ></span>
              </button>
            </section>
          )}
        </section>
      </div>
      {screenWidth < 800 && (
        <section className="single_component_content_details_container small_size">
          <div className="single_component_content_details">
            <div>
              <p>Name: {title}</p>
              <p>$ {price} for one</p>
            </div>
            <div>
              <p>
                item type : <span>{type}</span>{" "}
              </p>
              <p>
                Rating:{" "}
                <span className="single_component_rating">
                  {rating} <i className="fa-solid fa-star"></i>
                </span>{" "}
              </p>
            </div>
          </div>
          <button>
            {" "}
            Add To Cart{" "}
            <span
              style={{
                position: "absolute",
                right: "0.5rem",
                padding: "0 1rem",
              }}
            ></span>
          </button>
        </section>
      )}
    </main>
  );
};

export default SingleComponent;
