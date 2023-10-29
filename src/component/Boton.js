import React from "react";
import "./boton.css";
import { useState, useEffect } from "react";

import Bar from "./bar"; // Barコンポーネントをインポート

const Boton = ({ selectedDate }) => {
  // selectedDateを受け取る
  const [positiveCount, setPositiveCount] = useState(
    Number(localStorage.getItem(`${selectedDate}-positiveCount`) || 0)
  );
  const [negativeCount, setNegativeCount] = useState(
    Number(localStorage.getItem(`${selectedDate}-negativeCount`) || 0)
  );

  useEffect(() => {
    setPositiveCount(
      Number(localStorage.getItem(`${selectedDate}-positiveCount`) || 0)
    );
  }, [selectedDate]);

  useEffect(() => {
    setNegativeCount(
      Number(localStorage.getItem(`${selectedDate}-negativeCount`) || 0)
    );
  }, [selectedDate]);

  const handlePositiveClick = () => {
    setPositiveCount(positiveCount + 1);
    localStorage.setItem(
      `${selectedDate}-positiveCount`,
      (positiveCount + 1).toString()
    );
  };

  const handleNegativeClick = () => {
    setNegativeCount(negativeCount + 1);
    localStorage.setItem(
      `${selectedDate}-negativeCount`,
      (negativeCount + 1).toString()
    );
  };

  return (
    <div className="homeshikari-butan">
      <div className="positive">
        <button className="positive-buton" onClick={handlePositiveClick}>
          ホメルシス
        </button>
        　褒めた回数 {positiveCount} 回
      </div>
      <div className="negative">
        <button className="negative-buton" onClick={handleNegativeClick}>
          シカリシス
        </button>
        　叱った回数 {negativeCount} 回
      </div>
    </div>
  );
};

export default Boton;
