import React from "react";
import Card from "./Card";
import { specialDishes } from "../utils/data";
import { useNavigate } from "react-router-dom";
const Highlights = () => {
  const navigate = useNavigate();
  return (
    <section className="highlight_section _max_width_center">
      <header className="_flex_box">
        <h2 className="highlight_title">Specials</h2>
        <div>
          <button
            className="highlight_btn _BTN_"
            onClick={() => navigate("/orderonline")}
          >
            Online Menu
          </button>
        </div>
      </header>
      <section className="highlight_card_container">
        {specialDishes.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </section>
    </section>
  );
};

export default Highlights;
