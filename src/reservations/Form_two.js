import React from "react";
import { fontAwesomeIcons } from "../utils/data";
import reservationCss from "./reservations.module.css";
import { toUpper } from "../utils/functions";

const Form2 = ({
  reservationDetails,
  handleFlag,
  handleChange,
  details,
  formErrors,
}) => {
  const {
    form_2_container,
    form_2_container_form,
    form2_email,
    specialRequest_class,
    form_2_state,
    form_2_state_details,
    form2_calendar,
    form2_diners,
    form2_time,
    form2_occasion,
    form2_seating,
    form2_agrement,
    orange_color,
    form_errors_class,
  } = reservationCss;

  const { firstName, lastName, email, phoneNumber, specialRequest } = details;

  const {
    "indoor-outdoor": indoorOutdoor,
    diners,
    date,
    occasion,
    time,
  } = reservationDetails;

  return (
    <section className={`${form_2_container} _max_width_center`}>
      <form className={form_2_container_form}>
        <div className="firstName">
          <label htmlFor="firstName">FirstName</label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="FirstName"
            onChange={handleChange}
            required
            style={formErrors.firstName ? { border: "2px solid orange" } : {}}
          />
          <p className={form_errors_class}>
            {formErrors.firstName || "\u00A0"}
          </p>
        </div>

        <div className="lastName">
          <label htmlFor="lastName">LastName</label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="LastName"
            onChange={handleChange}
            required
            style={formErrors.lastName ? { border: "2px solid orange" } : {}}
          />
          <p className={form_errors_class}>{formErrors.lastName || "\u00A0"}</p>
        </div>

        <div className={form2_email}>
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            required
            style={formErrors.email ? { border: "2px solid orange" } : {}}
          />
          <p className={form_errors_class}>{formErrors.email || "\u00A0"}</p>
        </div>

        <div className="phoneNumber">
          <label htmlFor="phoneNumber">PhoneNumber</label>

          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="No -"
            onChange={handleChange}
            required
            style={formErrors.phoneNumber ? { border: "2px solid orange" } : {}}
          />
          <p className={form_errors_class}>
            {formErrors.phoneNumber || "\u00A0"}
          </p>
        </div>

        <div className={form_2_state}>
          <div className={form_2_state_details} onClick={handleFlag}>
            <div className={form2_calendar}>
              {date ? (
                <>
                  <i className={fontAwesomeIcons.calendar}></i>
                  <span>{date}</span>
                </>
              ) : (
                <div className={orange_color}>
                  <i className={fontAwesomeIcons.calendar}></i>

                  <span> Select Date</span>
                </div>
              )}
            </div>
            <div className={form2_diners}>
              {diners ? (
                <>
                  <i className={fontAwesomeIcons.user}></i>
                  <span>{diners} Diners</span>
                </>
              ) : (
                <div className={orange_color}>
                  <i className={fontAwesomeIcons.user}></i>

                  <span>No Diners</span>
                </div>
              )}
            </div>
            <div className={form2_time}>
              {time ? (
                <>
                  <i className={fontAwesomeIcons.time}></i>
                  <span>{time}: 00pm</span>
                </>
              ) : (
                <div className={orange_color}>
                  <i className={fontAwesomeIcons.time}></i>

                  <span> Select Time</span>
                </div>
              )}
            </div>
            <div className={form2_occasion}>
              {occasion ? (
                <>
                  <i className={fontAwesomeIcons.occasion}></i>
                  <span>{toUpper(occasion)} </span>
                </>
              ) : (
                <div className={orange_color}>
                  <i className={fontAwesomeIcons.occasion}></i>

                  <span>occasion</span>
                </div>
              )}
            </div>
          </div>
          <div className={form2_seating} onClick={handleFlag}>
            <label>{toUpper(indoorOutdoor)} Seating</label>
          </div>
          <div className={form2_agrement}>
            <input
              type="radio"
              name="agrement"
              id="agrement"
              value={true}
              onChange={handleChange}
            />
            <label
              htmlFor="agrement"
              style={
                formErrors.agrement ? { color: "orange" } : { color: "white" }
              }
            >
              You agree to our friendly Privacy policy
            </label>
          </div>
        </div>

        <div className={specialRequest_class}>
          <label htmlFor="specialRequest">specialRequest</label>

          <textarea
            name="specialRequest"
            id="specialRequest"
            value={specialRequest}
            rows={5}
            onChange={handleChange}
            placeholder="Comment"
          >
            {" "}
          </textarea>
        </div>
      </form>
    </section>
  );
};

export default Form2;
