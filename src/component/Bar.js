import React from "react";
import "./bar.css";

const Bar = ({ positive, negative }) => {
  const total = positive + negative;
  const positivePercentage = (positive / total) * 100;
  const negativePercentage = (negative / total) * 100;

  const positiveStyle = {
    width: `${positivePercentage}%`,
    backgroundColor: "green",
    height: "20px",
  };

  const negativeStyle = {
    width: `${negativePercentage}%`,
    backgroundColor: "red",
    height: "20px",
  };

  return (
    <div className="bar-container">
      <div style={positiveStyle}></div>
      <div style={negativeStyle}></div>
    </div>
  );
};

export default Bar;
