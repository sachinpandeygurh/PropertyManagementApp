import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import logoimg from "../img/logotwo.png";

const CarouselItem = ({ heading, paira }) => {
  return (
    <Carousel.Item>
      <div className="d-flex align-items-center justify-content-between">
        <img src={logoimg} alt="logo" width="50" height="50" className="mr-2" />
        <div className="d-flex flex-column align-items-center">
          <h5 className="text-dark">{heading}</h5>
          <p className="text-dark px-3 text-center">{paira}</p>
        </div>
      </div>
    </Carousel.Item>
  );
}

export default CarouselItem;
