import React from "react";
import "./index.css";
import Biografia from "./routes/Biografia";
import Libros from "./routes/Libros";
import Reuniones from "./routes/Reuniones";
import Club from "./routes/Club";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home";
import Contacto from "./routes/Contacto";
import Casa from "./routes/Casa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reuniones" element={<Reuniones />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/club" element={<Club />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/casajaneausten" element={<Casa />} />
      </Routes>
    </>
  );
}

export default App;
