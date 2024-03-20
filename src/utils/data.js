import { Greeksalad, LemonDessert, bruchetta } from "./index";
import { groot, superMan, stefan, Jake } from "./index";

export const specialDishes = [
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

export const reviewData = [
  {
    id: "abc",
    name: "Groot",
    img: groot,
    review: "Delicious food served in a cozy ambiance, great experience.",
  },
  {
    id: "cca",
    name: "Superman",
    img: superMan,
    review: "Tasty dishes, cozy vibe, highly recommended spot.",
  },
  {
    id: "zzz",
    name: "Štefan Štefančík",
    img: stefan,
    review: "Yummy food, friendly staff, definitely worth trying.",
  },
  {
    id: "www",
    name: "Jake Nackos",
    img: Jake,
    review:
      "Outstanding cuisine, attentive staff, perfect spot for any occasion.",
  },
];

export const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "Order Online", path: "/order online" },
  { name: "Login", path: "/Login" },
];
