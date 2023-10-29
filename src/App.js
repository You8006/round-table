import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Boton from "./component/boton";
import Title from "./component/title";
import Calendar from "./component/calander";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* トップページのルート */}
          <Route
            path="/"
            element={
              <>
                <div>
                  <Title />
                </div>
                <div>
                  <Boton />
                </div>
                <div>
                  <Calendar></Calendar>

                  {/* <Link to="/calendar">カレンダー表示</Link> */}
                </div>
              </>
            }
          />

          {/* カレンダーコンポーネントのルート */}

          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
