import React from "react";
import "./SpecialCake.css";
import blackforest from "../../assets/special cakes/black forest cake.jpg";
import butterscotch from "../../assets/special cakes/Butter-Scotch Cake.jpg";
import photocake from "../../assets/special cakes/photo cake.jpg";
import pinatacake from "../../assets/special cakes/pinata cake.jpg";
import rainbow from "../../assets/special cakes/rainbow cakes.jpg";
import redvelvet from "../../assets/special cakes/red-velvet cake.jpg";
import whiteforest from "../../assets/special cakes/white forest cake.jpg";

function SpecialCake() {
  return (
    <div className="special-cake-section">
      <h1>Special Cakes</h1>
      <div className="chocolate-section-cakes">
        <div className="cake">
          <img src={blackforest} alt="choco-chips" />
          <div className="cake-info">
            <h2>Black Forest Cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={butterscotch} alt="choco-chips" />
          <div className="cake-info">
            <h2>Butterscotch Cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={photocake} alt="choco-chips" />
          <div className="cake-info">
            <h2>Photo Cake</h2>
            <h3 className="strike">Rs. 550 Half Kilo-Gram</h3>
            <h3>Rs. 900 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={pinatacake} alt="choco-chips" />
          <div className="cake-info">
            <h2>Pinata Cake</h2>
            <h3>Rs. 600 Half Kilo-Gram</h3>
            <h3 className="strike">Rs. 1200 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={rainbow} alt="choco-chips" />
          <div className="cake-info">
            <h2>Rainbow Cake</h2>
            <h3>Rs. 500 Half Kilo-Gram</h3>
            <h3>Rs. 1000 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={redvelvet} alt="choco-chips" />
          <div className="cake-info">
            <h2>Red Velvet Cake</h2>
            <h3>Rs. 550 Half Kilo-Gram</h3>
            <h3>Rs. 1200 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={whiteforest} alt="choco-chips" />
          <div className="cake-info">
            <h2>White Forest Cake</h2>
            <h3>Rs. 350 Half Kilo-Gram</h3>
            <h3>Rs. 650 Kilo-Gram</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialCake;
