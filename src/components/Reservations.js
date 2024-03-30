// import React, { useState } from "react";
// import { getCurrentDate } from "../utils/functions";

// const Reservations = () => {
//   return (
//     <section>
//       <Form1 />
//     </section>
//   );
// };

// export default Reservations;

// const Form1 = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [seatingPreference, setSeatingPreference] = useState("indoor");
//   const [date, setDate] = useState("");
//   const [diners, setDiners] = useState("");
//   const [occasion, setOccasion] = useState("");
//   const [time, setTime] = useState("");
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "date":
//         setDate(value);
//         break;
//       case "diners":
//         setDiners(value);
//         break;
//       case "indoor-outdoor":
//         setSeatingPreference(value);
//         break;
//       case "occasion":
//         setOccasion(value);
//         break;
//       case "time":
//         setTime(value);
//         break;
//       default:
//     }
//   };

//   return (
//     <section className="reservation _max_width_center">
//       <h2 className="reservation-heading">Reservations</h2>
//       <form>
//         <div className="indoor">
//           <label htmlFor="indoor">Indoor seating</label>
//           <input
//             type="radio"
//             id="indoor"
//             name="indoor-outdoor"
//             value="indoor"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="outdoor">
//           <label htmlFor="outdoor">Outdoor seating</label>
//           <input
//             type="radio"
//             id="outdoor"
//             name="indoor-outdoor"
//             value="outdoor"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="date">
//           <label htmlFor="date">select date</label>
//           <div className=" reservation-input-container">
//             <input
//               type="date"
//               name="date"
//               id="date"
//               className="date-input"
//               value={date}
//               min={getCurrentDate()}
//               onChange={handleChange}
//             />

//             {date ? (
//               <div className="absolute show-input-details">
//                 <span></span>
//                 <span>{date}</span>

//                 <span>
//                   <i className="fas fa-chevron-up"></i>
//                 </span>
//               </div>
//             ) : (
//               <div className="absolute">
//                 <span>
//                   <i className="far fa-calendar"></i>
//                 </span>
//                 <span>Select Date</span>
//                 <span>
//                   <i className="fas fa-chevron-down"></i>
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="members">
//           <label htmlFor="diners">Number of Diners</label>

//           <div className="reservation-input-container">
//             <select
//               name="diners"
//               id="diners"
//               className="select-value members-input"
//               onChange={handleChange}
//               value={diners}
//             >
//               <option value="" disabled>
//                 No of Diners
//               </option>
//               <option value="1">1 Diner</option>
//               <option value="2">2 Diner</option>
//               <option value="3">3 Diner</option>
//               <option value="4">4 Diner</option>
//               <option value="5">5 Diner</option>
//               <option value="6">6 Diner</option>
//               <option value="7">7 Diner</option>
//               <option value="8">8 Diner</option>
//               <option value="9">9 Diner</option>
//               <option value="10">10 Diner</option>
//             </select>

//             {diners ? (
//               <div className="absolute show-input-details">
//                 <span></span>
//                 <span>{diners} Diners</span>

//                 <span className="second-child">
//                   <i className="fas fa-chevron-up"></i>
//                 </span>
//               </div>
//             ) : (
//               <div className="absolute">
//                 <span>
//                   <i className="fa-solid fa-user"></i>
//                 </span>
//                 <span>No of Diners</span>
//                 <span>
//                   <i className="fas fa-chevron-down"></i>
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="occasion">
//           <label htmlFor="occasion">Occasion</label>
//           <div className="reservation-input-container">
//             <select
//               name="occasion"
//               id="occasion"
//               className="select-value occasion-input"
//               onChange={handleChange}
//               value={occasion}
//             >
//               <option value="" disabled>
//                 Select Occasion
//               </option>
//               <option value="birthday">Birthday</option>
//               <option value="engagement">Engagement</option>
//               <option value="anniversary">Anniversary</option>
//             </select>

//             {occasion ? (
//               <div className="absolute show-input-details">
//                 <span></span>
//                 <span>
//                   {occasion[0].toLocaleUpperCase() + occasion.slice(1)}{" "}
//                 </span>

//                 <span className="second-child">
//                   <i className="fas fa-chevron-up"></i>
//                 </span>
//               </div>
//             ) : (
//               <div className="absolute">
//                 <span>
//                   <i className="fa-sharp fa-solid fa-champagne-glasses"></i>
//                 </span>
//                 <span>Occasion</span>
//                 <span>
//                   <i className="fas fa-chevron-down"></i>
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="time">
//           <label htmlFor="time">Select Time</label>
//           <div className="reservation-input-container">
//             <select
//               name="time"
//               id="time"
//               className="select-value time-input"
//               onChange={handleChange}
//               value={time}
//             >
//               <option value="" disabled>
//                 Select Time
//               </option>
//               <option value="5">5:00 pm</option>
//               <option value="6">6:00 pm</option>
//               <option value="7">7:00 pm</option>
//               <option value="8">8:00 pm</option>
//               <option value="9">9:00 pm</option>
//               <option value="10">10:00 pm</option>
//             </select>

//             {time ? (
//               <div className="absolute show-input-details">
//                 <span></span>
//                 <span>{time}: 00 pm</span>

//                 <span className="second-child">
//                   <i className="fas fa-chevron-up"></i>
//                 </span>
//               </div>
//             ) : (
//               <div className="absolute">
//                 <span>
//                   <i className="fa-solid fa-clock"></i>
//                 </span>
//                 <span>Select Time</span>
//                 <span>
//                   <i className="fas fa-chevron-down"></i>
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// };

import React, { useState } from "react";
import { getCurrentDate, useConsole } from "../utils/functions";
import { fontAwesomeIcons } from "../utils/data";
const Reservations = () => {
  return (
    <section>
      <Form1 />
    </section>
  );
};

export default Reservations;

const Form1 = () => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [reservationDetails, setReservationsDetails] = useState({
    "indoor-outdoor": "indoor",
    date: "",
    diners: "",
    occasion: "",
    time: "",
  });

  const { diners, date, occasion, time } = reservationDetails;
  const handleChange = (e) => {
    setReservationsDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value,
    });
  };

  useConsole(reservationDetails);

  return (
    <section className="reservation _max_width_center">
      <h2 className="reservation-heading">Reservations</h2>

      <form>
        <section className="indoor">
          <label htmlFor="indoor">Indoor seating</label>
          <input
            type="radio"
            id="indoor"
            name="indoor-outdoor"
            value="indoor"
            onChange={handleChange}
          />
        </section>
        <div className="outdoor">
          <label htmlFor="outdoor">Outdoor seating</label>
          <input
            type="radio"
            id="outdoor"
            name="indoor-outdoor"
            value="outdoor"
            onChange={handleChange}
          />
        </div>

        <section className="date">
          <label htmlFor="date">select date</label>
          <div className=" reservation-input-container">
            <input
              type="date"
              name="date"
              id="date"
              className="date-input"
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

          <div className="reservation-input-container">
            <select
              name="diners"
              id="diners"
              className="members-input"
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
          <div className="reservation-input-container">
            <select
              name="occasion"
              id="occasion"
              className="occasion-input"
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
          <div className="reservation-input-container">
            <select
              name="time"
              id="time"
              className="time-input"
              onChange={handleChange}
              value={time}
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="5">5:00 pm</option>
              <option value="6">6:00 pm</option>
              <option value="7">7:00 pm</option>
              <option value="8">8:00 pm</option>
              <option value="9">9:00 pm</option>
              <option value="10">10:00 pm</option>
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
      </form>
    </section>
  );
};

const ShowInputDetails = ({ state, text }) => {
  return (
    <>
      <div className="absolute show-input-details">
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
  return (
    <div className="absolute">
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
