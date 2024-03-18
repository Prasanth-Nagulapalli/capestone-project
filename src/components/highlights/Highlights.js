import React from "react";
import highlightsCss from "./highlights.module.css";
import Card from "../card/Card";
import { Greeksalad, LemonDessert, bruchetta } from "../../utils";

const data = [
  {
    id: 1,
    img: Greeksalad,
    heading: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    id: 2,
    img: bruchetta,
    heading: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    id: 3,
    img: LemonDessert,
    heading: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ",
  },
];

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
        {data.map((item) => {
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
