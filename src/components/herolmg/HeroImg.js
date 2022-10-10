import "./HeroImg.css";
import IntroImg from "../../assets/yy.png";
import React from "react";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          “La mitad del mundo no puede entender los placeres de la otra mitad”.
          Jane Austen
        </p>
        <h1>Club de Lectura Jane Austen Chile.</h1>
        <div className="content-btn">
          <Link to="/casajaneausten" className="btn">
            Casa Austen
          </Link>

          <Link to="/contacto" className="btn btn-light">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
