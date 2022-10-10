import React from "react";
import "./HistoriaDatos.css";

const HistoriaDatos = ({ title, children, img, smallText = false, link }) => {
  console.log(smallText);
  return (
    <div className="datos">
      <h2 className="datos-title">{title}</h2>
      <div className="datos-container">
        <div className={smallText ? "datos-text-small" : "datos-text-big"}>
          {children}
        </div>
        {img !== undefined ? (
          <div className={smallText ? "datos-image-small" : "datos-image-big"}>
            <a href={link} target="_blank">
              <img className="img" src={img} alt={title} />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HistoriaDatos;
