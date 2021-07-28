import React from "react";
import "./ChocolateSection.css";
import chocoChips from "../../assets/chocolate cakes/choco chips cake.jpg";
import chocoOverLoaded from "../../assets/chocolate cakes/chocolate overloaded cake.jpg";
import chocoTruffle from "../../assets/chocolate cakes/chocolate truffle cake.jpg";
import ferreroRocher from "../../assets/chocolate cakes/ferrero rocher cake.jpg";
import kitkat from "../../assets/chocolate cakes/kitkat cake.png";
import oreo from "../../assets/chocolate cakes/oreo cake.jpg";

function ChocolateSection() {
  return (
    <div className="chocolate-section">
      <h1>Chocolate Cakes</h1>
      <div className="chocolate-section-cakes">
        <div className="cake">
          <img src={chocoChips} alt="choco-chips" />
          <div className="cake-info">
            <h2>Choco Chips Cake</h2>
            <h3>Rs. 300 Half Kilo-Gram</h3>
            <h3>Rs. 600 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={chocoOverLoaded} alt="choco-chips" />
          <div className="cake-info">
            <h2>Chocolate Overloaded Cake</h2>
            <h3>Rs. 550 Half Kilo-Gram</h3>
            <h3>Rs. 1100 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={chocoTruffle} alt="choco-chips" />
          <div className="cake-info">
            <h2>Chocolate Truffle cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={ferreroRocher} alt="choco-chips" />
          <div className="cake-info">
            <h2>Ferrero Rocher Cake</h2>
            <h3>Rs. 600 Half Kilo-Gram</h3>
            <h3>Rs. 1200 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={kitkat} alt="choco-chips" />
          <div className="cake-info">
            <h2>Kitkat Cake</h2>
            <h3>Rs. 500 Half Kilo-Gram</h3>
            <h3>Rs. 1000 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={oreo} alt="choco-chips" />
          <div className="cake-info">
            <h2>Oreo Cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChocolateSection;
