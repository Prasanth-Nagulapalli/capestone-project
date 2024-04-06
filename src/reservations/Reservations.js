import React, { useEffect, useState } from "react";
import reservationCss from "./reservations.module.css";
import { littleLemon, HeroImg, rest3, rest_chef } from "../utils";
import FormOne from "./Form_one";
import FormTwo from "./Form_two";
import ConfirmCard from "./ConfirmCard";
// import { options } from "../utils/data";
// import { getCurrentDate, useConsole } from "../utils/functions";
// import { fontAwesomeIcons } from "../utils/data";

const Reservations = () => {
  

  const [flag, setFlag] = useState(true);

  const [confirmFlag, setConfirmFlag] = useState(false);

  const [formErrors, setFormErrors] = useState({});


  const {
    main_reservations_container,
    reservation_form_container,
    reservation_form_img_container,
    reservation_btn_container,
    little_Lemon_background,
  } = reservationCss;



  /* Form 1 */

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

  /* Form 2  state*/

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequest: "",
    agrement: false,
  });

  const handleChangeForm2 = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleFlag = () => {
    setFlag(!flag);
  };

  const handleFormErrors = () => setFormErrors(() => validateForm(details));
 
  const handleConfirmFlag = () => {
    setConfirmFlag(true)
  const timeOutId =   setTimeout(() => {
      setConfirmFlag(false)
    }, 5000)

    return () => clearTimeout(timeOutId)
  }
 
 const handleReset = () => {
   setDetails({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequest: "",
    agrement: false,
  });
  setReservationsDetails({
    "indoor-outdoor": "indoor",
    date: "",
    diners: "",
    occasion: "",
    time: "",
  })
  setFlag(true)
 }

  const handleReservation = () => {
    if (flag) {
      setFlag(false);
      return;
    }
    const { firstName, lastName, email, phoneNumber,agrement } = details;
    const {
      "indoor-outdoor": indoorOutdoor,
      diners,
      date,
      occasion,
      time,
    } = reservationDetails;
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      agrement &&
      indoorOutdoor &&
      diners &&
      date &&
      occasion &&
      time
    ) {
      // setConfirmFlag(true);
      handleConfirmFlag()
      handleReset()
      
    } else {
      handleFormErrors();
    }
  };

  const validateForm = (obj) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!obj.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!obj.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!obj.email) {
      errors.email = "Email is Required";
    }else if(!regex.test(obj.email)) {
      errors.email = "This is not a valid email"
    }
    if (!obj.phoneNumber) {
      errors.phoneNumber = "Phone is Required";
    }

    if (!obj.agrement) {
      errors.agrement = true;
    }

    return errors;
  };

  return (
    <section className={main_reservations_container}>
      {confirmFlag && <ConfirmCard />}
      {/* {true && <ConfirmCard />} */}
      <section className={reservation_form_container}>
        {flag ? (
          <FormOne
            handleChange={handleChange}
            reservationDetails={reservationDetails}
          />
        ) : (
          <FormTwo
            reservationDetails={reservationDetails}
            handleFlag={handleFlag}
            handleChange={handleChangeForm2}
            details={details}
            formErrors={formErrors}
          />
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
        <button onClick={handleReservation} className="reserve_btn">
          {flag ? "Reserve a Table" : "Confirm Reservation"}
        </button>
      </section>
    </section>
  );
};

export default Reservations;
