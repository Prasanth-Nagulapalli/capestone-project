import React from "react";
import highlightsCss from "./highlights.module.css";
import Card from "../card/Card";
import { specialDishes } from "../../utils/data";

const Highlights = () => {
  const { highlightSection, header, title, btnContainer, btn, cardContainer } =
    highlightsCss;

  return (
    <section className={highlightSection}>
      <header className={header}>
        <h1 className={title}>Specials</h1>
        <div className={btnContainer}>
          <button className={btn}>Online Menu</button>
        </div>
      </header>
      <section className={cardContainer}>
        {specialDishes.map((item) => {
          const { id, img, heading, price, description } = item;
          return (
            <Card
              key={id}
              id={id}
              img={img}
              heading={heading}
              price={price}
              description={description}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Highlights;
