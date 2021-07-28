import React from "react";
import "./SpecialCombos.css";
import chocoteddy from "../../assets/cake combos/chocolate cake + teddy bear.jpg";
import ferrerpbutter from "../../assets/cake combos/ferrero Rocher chocolate + Butter Scotch cake.jpg";
import redchocolate from "../../assets/cake combos/red velvet cake + chocolate rose bouquet.jpg";

function SpecialCombos() {
  return (
    <div className="special-combos-section">
      <h1>Special Combos</h1>

      <div className="special-cake">
        <img
          src={chocoteddy}
          alt="ferrero Rocher chocolate + Butter Scotch cake"
        />
        <div className="special-cake-info">
          <h2>Chocolate Cake + Teddy Bear</h2>
          <h3>Half kg chocolate cake & Small teddy bear</h3>
          <h3>
            <b>Rs. 899</b> Half-Kilo Gram
          </h3>
        </div>
      </div>
      <div className="special-cake">
        <img
          src={ferrerpbutter}
          alt="ferrero Rocher chocolate + Butter Scotch cake"
        />
        <div className="special-cake-info">
          <h2> Butter scotch cake +Ferrero Rocher Chocolate </h2>
          <h3>Half kg butter scotch cake & Ferrero Rocher pack of 16</h3>
          <h3>
            <b>Rs. 999</b> Half-Kilo Gram
          </h3>
        </div>
      </div>
      <div className="special-cake">
        <img
          src={redchocolate}
          alt="ferrero Rocher chocolate + Butter Scotch cake"
        />
        <div className="special-cake-info">
          <h2>Red velevt cake + Chocolate Rose Bouquet </h2>
          <h3>Half kg red velevt cake & Chocolate rose bouquet</h3>
          <h3>
            <b>Rs. 1199</b> Half-Kilo Gram
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SpecialCombos;
