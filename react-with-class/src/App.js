import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
