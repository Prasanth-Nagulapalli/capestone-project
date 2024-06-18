import React, { useEffect, useState } from "react";
import "./orderOnline.css";
import fooditems from "../utils/foodItems";
import FoodItem from "./FoodItem";

const Order = () => {
  const [foodList, setFoodList] = useState([]);
  const [bool, setBool] = useState("all");

  const handleFilter = (type) => {
    let filterdList;
    if (type === "all") {
      setBool("all");
      setFoodList(fooditems);
    } else if (type === "breakfast") {
      setBool("breakfast");
      filterdList = fooditems.filter(
        (item) => item.category === "breakfast" || item.category === "coffee"
      );
      setFoodList(filterdList);
    } else if (type === "lunch") {
      setBool("lunch");
      filterdList = fooditems
        .filter((item) => item.category === "meal" || item.category === "main")
        .sort((a, b) => b.id - a.id);

      setFoodList(filterdList);
    } else if (type === "dinner") {
      setBool("dinner");
      filterdList = fooditems
        .filter(
          (item) => item.category === "breakfast" || item.category === "main"
        )
        .sort((a, b) => b.id - a.id);
      setFoodList(filterdList);
    }

    if (type === "shakes") {
      setBool("shakes");
      filterdList = fooditems.filter((item) => item.type === "shake");
      setFoodList(filterdList);
    }
  };

  const buttons = [
    { id: 1, type: "all" },
    { id: 2, type: "breakfast" },
    { id: 3, type: "lunch" },
    { id: 4, type: "dinner" },
    { id: 5, type: "shakes" },
  ];

  useEffect(() => {
    setFoodList(fooditems);
  }, []);

  return (
    <section className="_max_width_center order_online">
      <div className="order_online_container">
        <header className="order_online_header">
          <p className="order_online_header_p">Order Your Favourite Food!</p>
        </header>

        <div className="order_online_search_container">
          <div className="order_online_search-bar">
            <span className="order_online_search_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="order_online_search_input" />
          </div>

          <div className="order_online_btn_container">
            <button className="reserve_btn order_online_btn">Search</button>
          </div>
        </div>

        <div className="order_online_filter_btn_container">
          {buttons.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => handleFilter(item.type)}
                className={`${item.type === bool ? "current_btn" : null}`}
              >
                {item.type}
              </button>
            );
          })}
        </div>

        <div className="order_online_card_container">
          {foodList.map((item) => {
            return <FoodItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Order;
