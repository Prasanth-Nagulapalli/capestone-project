import {
  Greeksalad,
  Greeksalad_mid,
  Greeksalad_min_2kb,
  Jake_mid,
  Jake_min_2kb,
  LemonDessert,
  LemonDessert_mid,
  LemonDessert_min_2kb,
  bruchetta,
  bruchetta_mid,
  bruchetta_min_2kb,
  groot_mid,
  groot_min_2kb,
  stefan_mid,
  stefan_min_2kb,
  superMan_mid,
  superMan_min_2kb,
} from "./index";
import { groot, superMan, stefan, Jake } from "./index";

export const specialDishes = [
  {
    id: 1,
    img: Greeksalad,
    midImg: Greeksalad_mid,
    minImg: Greeksalad_min_2kb,
    heading: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    id: 2,
    img: bruchetta,
    midImg: bruchetta_mid,
    minImg: bruchetta_min_2kb,
    heading: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  },
  {
    id: 3,
    img: LemonDessert,
    midImg: LemonDessert_mid,
    minImg: LemonDessert_min_2kb,
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
    midImg: groot_mid,
    minImg: groot_min_2kb,
    review: "Delicious food served in a cozy ambiance, great experience.",
  },
  {
    id: "cca",
    name: "Superman",
    img: superMan,
    midImg: superMan_mid,
    minImg: superMan_min_2kb,
    review: "Tasty dishes, cozy vibe, highly recommended spot.",
  },
  {
    id: "zzz",
    name: "Štefan Štefančík",
    img: stefan,
    midImg: stefan_mid,
    minImg: stefan_min_2kb,
    review: "Yummy food, friendly staff, definitely worth trying.",
  },
  {
    id: "www",
    name: "Jake Nackos",
    img: Jake,
    midImg: Jake_mid,
    minImg: Jake_min_2kb,
    review:
      "Outstanding cuisine, attentive staff, perfect spot for any occasion.",
  },
];

export const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "Order Online", path: "/orderonline" },
  { name: "Login", path: "/Login" },
];

export const fontAwesomeIcons = {
  calendar: "far fa-calendar",
  user: "fa-solid fa-user",
  occasion: "fa-sharp fa-solid fa-champagne-glasses",
  time: "fa-solid fa-clock",
};

export const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
