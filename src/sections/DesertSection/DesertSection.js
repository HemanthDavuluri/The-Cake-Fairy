import React from "react";
import "./DesertSection.css";
import gulabjamun from "../../assets/dessert cakes/gulab jamun cake.jpeg";
import kaju from "../../assets/dessert cakes/kaju katli cake.jpg";
import rasmalai from "../../assets/dessert cakes/rasmalai cake.jpg";

function DesertSection() {
  return (
    <div className="desert-section">
      <h1>Desert Cakes</h1>
      <div className="chocolate-section-cakes">
        <div className="cake">
          <img src={gulabjamun} alt="choco-chips" />
          <div className="cake-info">
            <h2>Gulab Jamun Cake</h2>
            <h3>Rs. 500 Half Kilo-Gram</h3>
            <h3>Rs. 1000 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={kaju} alt="choco-chips" />
          <div className="cake-info">
            <h2>Kaju Katli Cake </h2>
            <h3>Rs. 550 Half Kilo-Gram</h3>
            <h3>Rs. 1100 Kilo-Gram</h3>
          </div>
        </div>
        <div className="cake">
          <img src={rasmalai} alt="choco-chips" />
          <div className="cake-info">
            <h2>Rasmalai Cake</h2>
            <h3>Rs. 500 Half Kilo-Gram</h3>
            <h3>Rs. 1000 Kilo-Gram</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesertSection;
