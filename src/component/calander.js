import "./calander.css";

import React, { useState, useEffect } from "react";

const Calendar = ({ onDateSelect, selectedDate }) => {
  const [displayedDate, setDisplayedDate] = useState(
    selectedDate || new Date().toISOString().slice(0, 10)
  );
  const [positiveCount, setPositiveCount] = useState(
    Number(localStorage.getItem(`${displayedDate}-positiveCount`) || 0)
  );
  const [negativeCount, setNegativeCount] = useState(
    Number(localStorage.getItem(`${displayedDate}-negativeCount`) || 0)
  );

  // ページ読み込み時に現在の日付を設定
  useEffect(() => {
    setDisplayedDate(selectedDate || new Date().toISOString().slice(0, 10));
  }, [selectedDate]);

  // ページ読み込み時にLocalStorageからデータを取得
  useEffect(() => {
    setPositiveCount(
      Number(localStorage.getItem(`${displayedDate}-positiveCount`) || 0)
    );
    setNegativeCount(
      Number(localStorage.getItem(`${displayedDate}-negativeCount`) || 0)
    );
  }, [displayedDate]);

  const handleChange = (event) => {
    const date = event.target.value;
    setDisplayedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className="calen">
      <input type="date" value={displayedDate} onChange={handleChange} />
      <div>褒めた回数: {positiveCount} 回</div>
      <div>叱った回数: {negativeCount} 回</div>
    </div>
  );
};

export default Calendar;
