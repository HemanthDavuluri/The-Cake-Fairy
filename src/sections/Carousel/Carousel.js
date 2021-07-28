import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import butterscotch from "../../assets/Butter-Scotch Cake.jpg";
import ferrero from "../../assets/ferrero rocher cake.jpg";
import gulabjamun from "../../assets/gulab jamun cake.jpeg";
import pineapple from "../../assets/pineapple cake.jpg";
import rainbow from "../../assets/rainbow cakes.jpg";
import redvelvet from "../../assets/red-velvet cake.jpg";

function CarouselM({ dropdown, dropdownset }) {
  function setdropDown() {
    if (dropdown === true) {
      dropdownset(false);
    }
  }
  return (
    <div className="carouselM" onClick={setdropDown}>
      <Carousel autoPlay className="main-carousel" infiniteLoop>
        <div>
          <img src={butterscotch} alt="butterscotch" />
        </div>
        <div>
          <img src={ferrero} alt="butterscotch" />
        </div>
        <div>
          <img src={gulabjamun} alt="butterscotch" />
        </div>
        <div>
          <img src={pineapple} alt="butterscotch" />
        </div>
        <div>
          <img src={rainbow} alt="butterscotch" />
        </div>
        <div>
          <img src={redvelvet} alt="butterscotch" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselM;
