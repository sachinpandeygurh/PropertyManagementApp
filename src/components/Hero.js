import React from "react";
import logo2 from "../img/logotwo.png";

const Hero = () => {
  return (
    <div className="bg-dark hero">
      <img src={logo2} alt="logo" width="100" height="100" className="mr-2" />
      <h1 className="text-white">Property Management App</h1>
    </div>
  );
};

export default Hero;
