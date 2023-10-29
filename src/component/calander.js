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
  const [positiveCount, setPositiveCount] = useState(
    Number(localStorage.getItem(`${selectedDate}-positiveCount`) || 0)
  );
  const [negativeCount, setNegativeCount] = useState(
    Number(localStorage.getItem(`${selectedDate}-negativeCount`) || 0)
  );

  const handleChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    setPositiveCount(
      Number(localStorage.getItem(`${date}-positiveCount`) || 0)
    );
    setNegativeCount(
      Number(localStorage.getItem(`${date}-negativeCount`) || 0)
    );

    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className="calen">
      <input type="date" value={selectedDate} onChange={handleChange} />
      <div>褒めた回数: {positiveCount} 回</div>
      <div>叱った回数: {negativeCount} 回</div>
    </div>
  );
};

export default Calendar;
