import React from "react";
import "./boton.css";
import { useState } from "react";

import Bar from "./bar"; // Barコンポーネントをインポート

const Boton = () => {
  // 褒めた回数と叱った回数のステートを定義
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  // 褒めるボタンが押されたときのハンドラ関数
  const handlePositiveClick = () => {
    setPositiveCount(positiveCount + 1);
  };

  // 叱るボタンが押されたときのハンドラ関数
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

      <Bar positive={positiveCount} negative={negativeCount} />
      {/* ステートをBarコンポーネントに渡す */}
    </div>
  );
};

export default Boton;
