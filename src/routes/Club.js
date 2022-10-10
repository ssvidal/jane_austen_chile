import React, { useEffect } from "react";
import "./Club.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Integrantes from "../components/integrantes/Integrantes";

const Club = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CLUB" text="Fundadora y Directiva Jane Austen Chile" />
      <Integrantes />
      <Footer />
    </div>
  );
};

export default Club;
