import React from "react";
import "./Publicaciones.css";

const Publicaciones = ({ imagen, nombre, texto }) => {
  return (
    <div className="contenedor-publicaciones">
      <div className="imagen-publicaciones">
        <img alt="imagen" src={require(`../../assets/${imagen}`)} />
      </div>
      <div className="contenedor-texto-publicaciones">
        <h1 className="nombre-publicaciones">{nombre}</h1>
        <p className="texto-publicaciones"> {texto}</p>
      </div>
    </div>
  );
};
export default Publicaciones;
