import "./App.css";
import "../src/assets/style/custom.scss";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  style = {
    padding: "25px 10px",
    color: "#fff",
    marginBottom: "0px",
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <div className="App container">
            <Routes>
              <Route path="/" element={<News />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
