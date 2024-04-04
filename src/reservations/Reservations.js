import React, { useState } from "react";
import reservationCss from "./reservations.module.css";
import { littleLemon, HeroImg, rest3, rest_chef } from "../utils";
import FormOne from "./Form_one";
import FormTwo from "./Form_two";


// import { options } from "../utils/data";
// import { getCurrentDate, useConsole } from "../utils/functions";
// import { fontAwesomeIcons } from "../utils/data";


const Reservations = () => {
  const {
    main_reservations_container,
    reservation_form_container,
    reservation_form_img_container,
    reservation_btn_container,
    little_Lemon_background,
  } = reservationCss;

  return (
    <section className={main_reservations_container}>
      <section className={reservation_form_container}>
        {/* <FormOne /> */}

        <FormTwo />

        <figure className={little_Lemon_background}>
          <img src={littleLemon} alt="little_lemon" />
          <img src={littleLemon} alt="little_lemon" />
          <img src={littleLemon} alt="little_lemon" />
          <img src={littleLemon} alt="little_lemon" />
        </figure>
      </section>

      <section
        className={`${reservation_form_img_container} _max_width_center`}
      >
        <figure>
          <img src={rest3} alt="restaurant" />
          <img src={rest_chef} alt="chef" />
          <img src={HeroImg} alt="HeroImg" />
        </figure>
      </section>
      <section className={`${reservation_btn_container} _max_width_center`}>
        <button className="reserve_btn">Reserve a Table</button>
      </section>
    </section>
  );
};

export default Reservations;




