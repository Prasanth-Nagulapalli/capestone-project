// import React from "react";

// const Reservations = () => {
//   return (
//     <section>
//       <Form1 />
//     </section>
//   );
// };

// export default Reservations;

// const Form1 = () => {
//   return (
//     <>
//       <h1>Reservations</h1>
//       <form action="">
//         <section>
//           <div className="indoor">
//             <label htmlFor="indoor">Indoor seating</label>
//             <input type="radio" id="indoor" />
//           </div>
//           <div className="outdoor">
//             <label htmlFor="outdoor">Indoor seating</label>
//             <input type="radio" id="outdoor" />
//           </div>

//           <div className="date">
//             <input type="date" name="" id="" />
//           </div>

//           <div className="occasion">
//             <select name="" id="">
//               <option value="">Birthday</option>
//               <option value="">Engagement</option>
//               <option value="">Anniversary</option>
//             </select>
//           </div>

//           <div className="members">
//             <label htmlFor="">Number of diners</label>
//             <select name="" id="">
//               <option value="">1 Diner</option>
//               <option value="">2 Diner</option>
//               <option value="">3 Diner</option>
//               <option value="">4 Diner</option>
//               <option value="">5 Diner</option>
//               <option value="">6 Diner</option>
//               <option value="">7 Diner</option>
//               <option value="">8 Diner</option>
//               <option value="">9 Diner</option>
//               <option value="">10 Diner</option>
//             </select>
//           </div>
//            <div className="time">
//             <label htmlFor="time">time</label>
//             <input type="time" name="" id="" />
//            </div>

//         </section>
//       </form>
//     </>
//   );
// };
import React, { useState } from 'react';

function ReservationsForm() {
  const [seatingPreference, setSeatingPreference] = useState('indoor');
  const [date, setDate] = useState(null);
  const [numberOfDiners, setNumberOfDiners] = useState(10);
  const [occasion, setOccasion] = useState('');
  const [time, setTime] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'seatingPreference':
        setSeatingPreference(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'numberOfDiners':
        setNumberOfDiners(value);
        break;
      case 'occasion':
        setOccasion(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      seatingPreference,
      date,
      numberOfDiners,
      occasion,
      time,
    };
    console.log(reservation);
    // Submit the reservation data to your backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservations</h2>
      <div>
        <label>
          Seating Preference:
          <input
            type="radio"
            name="seatingPreference"
            value="indoor"
            checked={seatingPreference === 'indoor'}
            onChange={handleChange}
          />
          Indoor
          <input
            type="radio"
            name="seatingPreference"
            value="outdoor"
            checked={seatingPreference === 'outdoor'}
            onChange={handleChange}
          />
          Outdoor
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Number of Diners:
          <input
            type="number"
            name="numberOfDiners"
            value={numberOfDiners}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Occasion:
          <input type="text" name="occasion" value={occasion} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Time:
          <input type="time" name="time" value={time} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit Reservation</button>

        <h2>no of diners</h2>
        <NumberOfDiners />

    </form>
  );
}

export default ReservationsForm;



// import React, { useState } from 'react';

function NumberOfDiners() {
  const [numberOfDiners, setNumberOfDiners] = useState(1);

  const handleChange = (event) => {
    setNumberOfDiners(event.target.value);
  };

  return (
    <div>
      <label>Number of Diners:</label>
      <select value={numberOfDiners} onChange={handleChange}>
        <option value="" disabled selected hidden>Choose an option</option>
        <option value="1">1 Diner</option>
        <option value="2">2 Diners</option>
        <option value="3">3 Diners</option>
        <option value="4">4 Diners</option>
        <option value="5">5 Diners</option>
        <option value="6">6 Diners</option>
        <option value="7">7 Diners</option>
        <option value="8">8 Diners</option>
        <option value="9">9 Diners</option>
        <option value="10">10 Diners</option>
      </select>
    </div>
  );
}

// export default NumberOfDiners;
