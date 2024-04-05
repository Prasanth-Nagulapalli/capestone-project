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

  // const [form1, setForm1] = useState({});
  // const handleSubmit = (formDetails) => {
  //   setForm1({ ...form1, ...formDetails });
  //   console.log("form1 state", form1);
  // };

  const [reservationDetails, setReservationsDetails] = useState({
    "indoor-outdoor": "indoor",
    date: "",
    diners: "",
    occasion: "",
    time: "",
  });

  // const { diners, date, occasion, time } = reservationDetails;
  const handleChange = (e) => {
    setReservationsDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [flag, setFlag] = useState(true);
  
  const handleFlag = () => {
    setFlag(!flag)
  }

  const handleReservation = () => {
    handleFlag()
  };

  return (
    <section className={main_reservations_container}>
      <section className={reservation_form_container}>
        {flag ? (
          <FormOne
            handleChange={handleChange}
            reservationDetails={reservationDetails}
          />
        ) : (
          <FormTwo reservationDetails={reservationDetails} handleFlag={handleFlag} />
        )}

        

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
        <button
          onClick={handleReservation}
          className="reserve_btn"
        >
          Reserve a Table
        </button>
      </section>
    </section>
  );
};

export default Reservations;
