import "./Footer.css";
import React from "react";

import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="icon">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>

            <p>
              Nos reunimos en cafeterias y parques de Santiago de Chile con
              galletitas. Tambien organizamos conversatorios online con
              integrantes de todas partes del mundo.
            </p>
          </div>
          <div className="email">
            <div className="icon">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>
            <h4>jaustenchile@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>Redes Sociales</h4>
          <p>
            Te invitamos a seguir nuestras redes sociales para conocer mas sobre
            nosotros.
          </p>
          <div className="social">
            <div>
              <a href="https://www.facebook.com/groups/janeaustenchile/">
                <FaFacebook
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
            <div>
              <a href="https://mobile.twitter.com/janeaustenchile">
                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCmCBcFKw_nyksBfxe5NwiRg">
                <FaYoutube
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/janeaustenchile/">
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
