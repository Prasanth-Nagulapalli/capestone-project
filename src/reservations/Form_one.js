import React from "react";
import { getCurrentDate } from "../utils/functions";
import { fontAwesomeIcons } from "../utils/data";
import reservationCss from "./reservations.module.css";
import { options } from "../utils/data";

const Form1 = ({ handleChange, reservationDetails }) => {
  /* Importing CSS */

  const {
    reservation,
    reservation_heading,
    indoor,
    outdoor,
    reservation_input_container,
    date_input,
    members_input,
    occasion_input,
    time_input,
    date_class,
    shadow,
  } = reservationCss;

  const { diners, date, occasion, time } = reservationDetails;

  return (
    <section className={`${reservation} _max_width_center`}>
      <h2 className={reservation_heading}>Reservations</h2>

      <form>
        <section className={indoor}>
          <label htmlFor="indoor">Indoor seating</label>
          <input
            type="radio"
            id="indoor"
            name="indoor-outdoor"
            value="indoor"
            onChange={handleChange}
          />
        </section>
        <div className={outdoor}>
          <label htmlFor="outdoor">Outdoor seating</label>
          <input
            type="radio"
            id="outdoor"
            name="indoor-outdoor"
            value="outdoor"
            onChange={handleChange}
          />
        </div>

        <section className={date_class}>
          <label htmlFor="date">select date</label>

          <div
            className={
              date
                ? `${reservation_input_container} ${shadow}`
                : reservation_input_container
            }
          >
            <input
              type="date"
              name="date"
              id="date"
              className={date_input}
              value={date}
              min={getCurrentDate()}
              onChange={handleChange}
            />

            {date ? (
              <ShowInputDetails state={date} />
            ) : (
              <SelelctInputDetails
                className={fontAwesomeIcons.calendar}
                text={"Select Date"}
              />
            )}
          </div>
        </section>

        <section className="members">
          <label htmlFor="diners">Number of Diners</label>

          <div
            className={
              diners
                ? `${reservation_input_container} ${shadow}`
                : reservation_input_container
            }
          >
            <select
              name="diners"
              id="diners"
              className={members_input}
              onChange={handleChange}
              value={diners}
            >
              <option value="" disabled>
                No of Diners
              </option>

              {options.map((item) => (
                <option key={item} value={item}>
                  {item} Diner
                </option>
              ))}
            </select>

            {diners ? (
              <ShowInputDetails state={diners} text={"Diners"} />
            ) : (
              <SelelctInputDetails
                className={fontAwesomeIcons.user}
                text={"No of Diners"}
              />
            )}
          </div>
        </section>

        <section className="occasion">
          <label htmlFor="occasion">Occasion</label>
          <div
            className={
              occasion
                ? `${reservation_input_container} ${shadow}`
                : reservation_input_container
            }
          >
            <select
              name="occasion"
              id="occasion"
              className={occasion_input}
              onChange={handleChange}
              value={occasion}
            >
              <option value="" disabled>
                Select Occasion
              </option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>

            {occasion ? (
              <ShowInputDetails
                state={occasion[0].toLocaleUpperCase() + occasion.slice(1)}
              />
            ) : (
              <SelelctInputDetails
                className={fontAwesomeIcons.occasion}
                text={"Occasion"}
              />
            )}
          </div>
        </section>

        <section className="time">
          <label htmlFor="time">Select Time</label>
          <div
            className={
              time
                ? `${reservation_input_container} ${shadow}`
                : reservation_input_container
            }
          >
            <select
              name="time"
              id="time"
              className={time_input}
              onChange={handleChange}
              value={time}
            >
              <option value="" disabled>
                Select Time
              </option>
              {options.slice(4).map((item, index) => (
                <option key={index} value={item}>
                  {item}: 00 pm
                </option>
              ))}
            </select>

            {time ? (
              <ShowInputDetails state={time} text={": 00 pm"} />
            ) : (
              <SelelctInputDetails
                className={fontAwesomeIcons.time}
                text={"Select Time"}
              />
            )}
          </div>
        </section>
        {/* <button type="submit">Submit</button> */}
      </form>
    </section>
  );
};

export default Form1;

const ShowInputDetails = ({ state, text }) => {
  const { absolute_class, show_input_details } = reservationCss;
  return (
    <>
      <div className={`${absolute_class} ${show_input_details}`}>
        <span></span>
        <span>
          {state} {text}
        </span>

        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
      </div>
    </>
  );
};

const SelelctInputDetails = ({ className, text }) => {
  const { absolute_class } = reservationCss;
  return (
    <div className={absolute_class}>
      <span>
        <i className={className}></i>
      </span>
      <span>{text}</span>
      <span>
        <i className="fas fa-chevron-down"></i>
      </span>
    </div>
  );
};
