import React from "react";
import "./Footer.css";
import { ReactComponent as Logo1 } from "../../assets/wedding-cake.svg";
import { ReactComponent as Logo2 } from "../../assets/cake.svg";
import { ReactComponent as Inst } from "../../assets/Instagram Logo.svg";
import logo3 from "../../assets/birthday-cake.png";
import instagram from "../../assets/instagram-logo.png";
import { useHistory } from "react-router-dom";

function Footer() {
  let history = useHistory();
  return (
    <div className="footer">
      <div className="footer-card">
        <Logo1 className="img" />
        <h3>Like & Follow</h3>
        <div className="card-handles">
          <Inst
            className="img"
            onClick={() =>
              window.open("https://www.instagram.com/savoring.the.sweetness")
            }
          />
        </div>
      </div>
      <div className="footer-card">
        <Logo2 className="img" />
        <h3>Place Your Order on Call</h3>
        <h3>+91 8108230465</h3>
        <h3>+91 7977875725</h3>
      </div>
      <div className="footer-card">
        <img src={logo3} className="img" alt="logo3" />
        <h3>Customise Your Cake</h3>
        <h3>Let us know When you call</h3>
      </div>
    </div>
  );
}

export default Footer;
