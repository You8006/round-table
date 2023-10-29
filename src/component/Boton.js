import React from "react";
import "./boton.css";
import { useState, useEffect } from "react";

import Bar from "./bar"; // Barコンポーネントをインポート

const Boton = () => {
  const today = new Date().toISOString().slice(0, 10); // 今日の日付を "YYYY-MM-DD" の形式で取得
  const initialPositiveCount = Number(
    localStorage.getItem(`${today}-positiveCount`) || 0
  );
  const initialNegativeCount = Number(
    localStorage.getItem(`${today}-negativeCount`) || 0
  );

  const [positiveCount, setPositiveCount] = useState(initialPositiveCount);
  const [negativeCount, setNegativeCount] = useState(initialNegativeCount);

  useEffect(() => {
    localStorage.setItem(`${today}-positiveCount`, positiveCount.toString());
  }, [positiveCount]);

  useEffect(() => {
    localStorage.setItem(`${today}-negativeCount`, negativeCount.toString());
  }, [negativeCount]);

  const handlePositiveClick = () => {
    setPositiveCount(positiveCount + 1);
  };

  const handleNegativeClick = () => {
    setNegativeCount(negativeCount + 1);
  };

  return (
    <div className="homeshikari-butan">
      <div className="positive">
        {/* 褒めるボタンにハンドラ関数を適用 */}
        <button className="positive-buton" onClick={handlePositiveClick}>
          ホメルシス
        </button>
        　褒めた回数 {positiveCount} 回
      </div>
      <div className="negative">
        {/* 叱るボタンにハンドラ関数を適用 */}
        <button className="negative-buton" onClick={handleNegativeClick}>
          シカリシス
        </button>
        　叱った回数 {negativeCount} 回
      </div>
    </div>
  );
};

export default Boton;
