import React, { useEffect } from "react";
import "./Casa.css";
import Navbar from "../components/navbar/Navbar";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Hogar from "../components/hogar/Hogar";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";

const Casa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="JANE AUSTEN HOME"
        text="Tour virtual por su hogar en Winchester Road, en Chawton."
      />
      <Hogar />
      <Logo />
      <Footer />
    </div>
  );
};

export default Casa;
