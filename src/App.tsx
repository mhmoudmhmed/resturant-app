import React from "react";
import Home from "./components/home";
import "./app.css";
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import SingleResturant from "./components/singleResturant";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resturant/:id" element={<SingleResturant />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
};

export default App;
