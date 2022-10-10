import React from "react";
import { Slideshow, Slide, TextoSlide } from "../Slideshow";
import "../SlideshowDatos/SlideshowDatos.css";
import styled from "styled-components";
import img1 from "../../../assets/reu1.png";
import img2 from "../../../assets/reu2.png";
import img3 from "../../../assets/reu3.png";
import img4 from "../../../assets/reu4.png";
import img5 from "../../../assets/reu5.png";
import fot1 from "../../../assets/f1.jpeg";
import fot2 from "../../../assets/f2.jpeg";
import fot3 from "../../../assets/f3.jpeg";
import fot4 from "../../../assets/f4.jpeg";
import fot5 from "../../../assets/f5.jpeg";
import fot6 from "../../../assets/f6.jpeg";
import fot7 from "../../../assets/f7.jpeg";
import fot8 from "../../../assets/f8.jpeg";

const SlideshowDatos = () => {
  return (
    <main>
      <Titulo>Reuniones</Titulo>
      <Slideshow controles={true}>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img1} alt="" />
          </a>
          <TextoSlide>
            <p></p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img2} alt="" />
          </a>
          <TextoSlide>
            <p></p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img3} alt="" />
          </a>
          <TextoSlide>
            <p></p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img4} alt="" />
          </a>
          <TextoSlide>
            <p></p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img5} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
      </Slideshow>

      <Titulo>Integrantes</Titulo>
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="3000"
        intervalo="5000"
      >
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot1} alt="" />
          </a>
          <TextoSlide colorFondo="navy"></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot2} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot3} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot4} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot5} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot6} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot7} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={fot8} alt="" />
          </a>
          <TextoSlide></TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
};

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default SlideshowDatos;
