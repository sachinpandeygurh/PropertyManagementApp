import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BtnCard from "./components/BtnCard";
import Slider from "./components/Slider";
import SocialMedia from "./components/SocialMedia";
import Tenent from "./components/Tenent";
import Management from "./components/Management";
console.log(SocialMedia)

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact
            path="/"
            element={
              <>
                <Hero />
                <BtnCard />
                <Slider/>
                <SocialMedia />
              </>
            }
          /> 
          <Route exact
            path="/tenent"
            element={<Tenent/> }
          /> 
          <Route exact
            path="/management"
            element={<Management/> }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
