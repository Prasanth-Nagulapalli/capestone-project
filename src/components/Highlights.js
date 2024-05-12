import React from "react";
import Card from "./Card";
import { specialDishes } from "../utils/data";

const Highlights = () => {
  return (
    <section className="highlight_section _max_width_center">
      <header className="_flex_box">
        <h2 className="highlight_title">Specials</h2>
        <div>
          <button className="highlight_btn _BTN_">Online Menu</button>
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
