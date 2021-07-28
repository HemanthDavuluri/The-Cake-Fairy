import React from "react";
import "./FruitSection.css";
import mangoCake from "../../assets/fruits cakes/mango cake.png";
import mixedFruit from "../../assets/fruits cakes/mixed fruit cakes.png";
import pineApple from "../../assets/fruits cakes/pineapple cake.jpg";
import strawberry from "../../assets/fruits cakes/strawberry cake.jpeg";

function FruitSection() {
  return (
    <div className="fruit-section">
      <h1>Fruit Cakes</h1>
      <div className="chocolate-section-cakes">
        <div className="cake">
          <img src={mangoCake} alt="choco-chips" />
          <div className="cake-info">
            <h2>Mango Cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={mixedFruit} alt="choco-chips" />
          <div className="cake-info">
            <h2>Mixed-Fruit Cake</h2>
            <h3>Rs. 270 Half Kilo-Gram</h3>
            <h3>Rs. 450 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={pineApple} alt="choco-chips" />
          <div className="cake-info">
            <h2>Pineapple cake</h2>
            <h3>Rs. 270 Half Kilo-Gram</h3>
            <h3>Rs. 450 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={strawberry} alt="choco-chips" />
          <div className="cake-info">
            <h2>Strawberry Cake</h2>
            <h3>Rs. 300 Half Kilo-Gram</h3>
            <h3>Rs. 600 Kilo-Gram</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitSection;
