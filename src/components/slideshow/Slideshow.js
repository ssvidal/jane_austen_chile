import React, { useRef, useEffect, useCallback } from "react";
import "./Slideshow.css";
import { ReactComponent as FlechaIzquierda } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "../../assets/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";

const Slideshow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);

      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });

      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, intervalo);
      });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
      {controles && (
        <Controles>
          <Boton onClick={anterior}>
            <FlechaIzquierda />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <FlechaDerecha />
          </Boton>
        </Controles>
      )}
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-width: 300px;
  max-height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    align-self: center;
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

const TextoSlide = styled.div`
  background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0,0,0,.3)"};
  color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  /*@media screen and (max-width: 700px) {
    position: relative;
    background: #000;
  }*/
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;

  path {
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }
  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;
export { Slideshow, Slide, TextoSlide };
