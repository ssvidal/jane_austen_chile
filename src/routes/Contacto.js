import React, { useEffect } from "react";
import "./Contacto.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Form from "../components/formulario/Form";
import Logo from "../components/logo/Logo";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACTO" text="Contactanos para propuestas" />
      <Form />
      <Logo />
      <Footer />
    </div>
  );
};

export default Contacto;
