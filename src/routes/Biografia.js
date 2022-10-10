import React, { useEffect } from "react";
import "./Biografia.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Historia from "../components/historia/Historia";

const Biografia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Biografia"
        text="(Steventon, Gran Bretaña, 1775 - Winchester, id., 1817) Novelista británica."
      />
      <Historia />
      <Footer />
    </div>
  );
};

export default Biografia;
