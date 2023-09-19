import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import avatar from "../img/logotwo.png";

const Slider=()=> {
  return (
    <Carousel className=" w-25 m-auto slider" auto="true" data-bs-theme="dark">
      <Carousel.Item>
       <div className="d-flex align-items-center justify-content-between">
        
       <img src={avatar} alt="logo" width="20" height="20" className="mr-2" />
        <div className="d-flex flex-direction-column align-items-center" style={{flexDirection:"column"}}>
        <h5 className="text-dark">First slide label</h5>
        <p className="text-dark px-3 text-center">
         " Nulla vitae elit libero, a pharetra augue mollis interdum. "
        </p>
        </div>
       </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className="d-flex align-items-center justify-content-between">
        
       <img src={avatar} alt="logo" width="20" height="20" className="mr-2" />
        <div className="d-flex flex-direction-column align-items-center" style={{flexDirection:"column"}}>
        <h5 className="text-dark">First slide label</h5>
        <p className="text-dark px-3 text-center">
         " Nulla vitae elit libero, a pharetra augue mollis interdum. "
        </p>
        </div>
       </div>
      </Carousel.Item>
<Carousel.Item>
       <div className="d-flex align-items-center justify-content-between">
        
       <img src={avatar} alt="logo" width="20" height="20" className="mr-2" />
        <div className="d-flex flex-direction-column align-items-center" style={{flexDirection:"column"}}>
        <h5 className="text-dark">First slide label</h5>
        <p className="text-dark px-3 text-center">
         " Nulla vitae elit libero, a pharetra augue mollis interdum. "
        </p>
        </div>
       </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;
