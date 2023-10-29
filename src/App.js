import "./App.css";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Boton from "./component/boton";
import Title from "./component/title";
import Calendar from "./component/calander";

function App() {
  // ページ読み込み時に現在の日付を取得して初期値とする
  const [currentDate, setCurrentDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    // ページが読み込まれたときにLocalStorageから今日の日付を取得
    const savedDate = localStorage.getItem("currentDate");
    if (savedDate) {
      setCurrentDate(savedDate);
    }
  }, []);

  const handleDateSelect = (date) => {
    setCurrentDate(date);

    // 選択した日付をLocalStorageに保存
    localStorage.setItem("currentDate", date);
  };

  return (
    <div className="App">
      <Title />
      <Boton selectedDate={currentDate} />
      <Calendar onDateSelect={handleDateSelect} selectedDate={currentDate} />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* トップページのルート */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <div>
//                   <Title />
//                 </div>
//                 <div>
//                   <Boton />
//                 </div>
//                 <div>
//                   <Calendar></Calendar>

//                   {/* <Link to="/calendar">カレンダー表示</Link> */}
//                 </div>
//               </>
//             }
//           />

//           {/* カレンダーコンポーネントのルート */}

//           {/* <Route path="/calendar" element={<Calendar />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
