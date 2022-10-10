import React, { useEffect } from "react";
import HeroImg from "../components/herolmg/HeroImg";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
    </div>
  );
};

export default Home;
