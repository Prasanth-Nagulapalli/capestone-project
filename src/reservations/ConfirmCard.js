import React from "react";
import reservationCss from "./reservations.module.css";
const ConfirmCard = () => {
  const { confirm_card } = reservationCss;
  return (
    <article className={confirm_card}>
      <h1>Your Reservation has been confirmed</h1>
      <h2>
        Check your Email <i className="fa-regular fa-envelope"></i>
      </h2>
    </article>
  );
};

export default ConfirmCard;
