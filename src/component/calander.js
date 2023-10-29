import React from "react";
import "./calander.css";

// const Calander = () => {
//   return <div>calander</div>;
// };

// export default Calander;

import React, { useState } from "react";

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
    if (onDateSelect) {
      onDateSelect(event.target.value);
    }
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleChange} />
    </div>
  );
};

export default Calendar;
