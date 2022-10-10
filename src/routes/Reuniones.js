import React, { useEffect } from "react";
import "./Reuniones.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Logo from "../components/logo/Logo";
import SlideshowDatos from "../components/slideshow/SlideshowDatos/SlideshowDatos";

const Reuniones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="REUNIONES"
        text="Eventos realizados por el club de lectura Jane Austen Chile"
      />
      <SlideshowDatos />
      <Logo />
      <Footer />
    </div>
  );
};

export default Reuniones;
