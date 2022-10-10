import "./Form.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Form = () => {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eymeu3i",
        "template_ifhqlbq",
        form.current,
        "XTkcChTVJ7rNO9Irn"
      )
      .then(
        () => {
          swal("Gracias!", "Mensaje enviado con exito!", "success");
          form.current.reset();
        },
        (error) => {
          swal("Oops", "Reintentelo!", "error");
        }
      );
  };

  return (
    <div className="form">
      <form className="texto-form" ref={form} onSubmit={enviarEmail}>
        <label>Nombre</label>
        <input className="datos" type="text" name="nombre"></input>
        <label>Email</label>
        <input className="datos" type="text" name="email"></input>
        <label>País</label>
        <input className="datos" type="text" name="pais"></input>
        <label>Mensaje</label>
        <textarea
          name="mensaje"
          className="mensaje"
          rows="6"
          placeholder="Escribe tu mensaje/Type your message here"
        ></textarea>

        <button className="btn btn-light">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
