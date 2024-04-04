import React, { useState } from "react";
import { fontAwesomeIcons } from "../utils/data";
import reservationCss from "./reservations.module.css";


const Form2 = () => {
    const [details, setDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      specialRequest: "",
    });
  
    const { firstName, lastName, email, phoneNumber, specialRequest } = details;
  
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
    } = reservationCss;
  
    const handleChange = (e) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
    };
  
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
            />
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
            />
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
            />
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
            />
          </div>
  
          <div className={form_2_state}>
            <div className={form_2_state_details}>
              <div className={form2_calendar}>
                <i className={fontAwesomeIcons.calendar}></i>
                <span>December 3</span>
              </div>
              <div className={form2_diners}>
                <i className={fontAwesomeIcons.user}></i>
                <span>10 Diners</span>
              </div>
              <div className={form2_time}>
                <i className={fontAwesomeIcons.time}></i>
                <span>6: 00pm</span>
              </div>
              <div className={form2_occasion}>
                <i className={fontAwesomeIcons.occasion}></i>
                <span>Birthday</span>
              </div>
            </div>
            <div className={form2_seating}>
              <label>Outdoor Seating</label>
            </div>
            <div className={form2_agrement}>
              <input type="radio" name="" id="agrement" />
              <label htmlFor="agrement">You agree to our friendly Privacy policy</label>
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

  export default Form2