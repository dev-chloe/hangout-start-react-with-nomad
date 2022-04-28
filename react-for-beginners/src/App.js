import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return <Router>
    <Routes>
      <Route path="/movie" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
}

export default App;
