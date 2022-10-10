import React from "react";
import "./Logo.css";
import LogoImg from "../../assets/logoclub.png";

const Logo = () => {
  return (
    <div className="logo-contenedor">
      <img className="logo-img" src={LogoImg} alt="logo" />
    </div>
  );
};

export default Logo;
