import React from "react";
import "./HogarCard.css";

const HogarCard = ({ title, children, img, smallText = false }) => {
  console.log(smallText);
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-container">
        <div className={smallText ? "card-text-small" : "card-text-big"}>
          {children}
        </div>
        <div className={smallText ? "card-image-small" : "card-image-big"}>
          <img className="img" src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default HogarCard;
