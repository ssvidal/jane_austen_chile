import "./Integrantes.css";
import React from "react";
import Fundadora from "../../assets/Fundadora.png";
import Directiva from "../../assets/Directiva.png";
import IntegrantesDatos from "./integrantesDatos/IntegrantesDatos";
import Chicas from "../../assets/Chicas.png";

const Integrantes = () => {
  return (
    <div className="container">
      <div className="inicio">
        <div className="inicio-info">
          <h4 className="titulo-inicio">Historia</h4>

          <p>
            “De los diversos instrumentos inventados por el hombre, el más
            asombroso es el libro; todos los demás son extensiones de su cuerpo…
          </p>
          <p>Sólo el libro es una extensión de la imaginación y la memoria”</p>
        </div>
      </div>

      <IntegrantesDatos img={Fundadora} smallText>
        <p>
          ¿Quiénes somos? No siempre es fácil responder a esta pregunta, pero lo
          intentaremos. Somos el Club de Lectura de Jane Austen en Chile. Nos
          dedicamos al estudio y análisis de vida y obra de la escritora Jane
          Austen. Esta es sólo una definición breve y concisa de quiénes somos.
          La respuesta simple a la pregunta inicial, porque en realidad, somos
          mucho más que eso.
        </p>
        <p>
          Nuestra historia comieza en el año 2013, cuando Catalina Silva Astorga
          fundó esta verdadera comunidad de lectores que se dedica a la
          reflexión y difusión en Chile de la vida y escritura de Jane Austen.
        </p>
      </IntegrantesDatos>

      <IntegrantesDatos
        smallText
        title="   Presentamos la Directiva de Jane Austen Chile período 2022 - 2023:"
        img={Directiva}
      >
        <p>Presidenta: Maggie Smith</p>
        <p>Vicepresidenta y Tesorera: Paulina Barraza</p>
        <p>Encargada de rrss: Elizabeth Leyton </p>
        <p>Desarrolladora Web: Susan Vidal</p>
        <br />
        <p>
          Nos orientamos a su lectura y a ahondar en la trascendencia de su
          narrativa, analizando su obra desde distintas perspectivas.
        </p>
        <p>
          Leemos también sus cartas, diversas biografías, estudios sobre su
          prosa y todo lo relacionado con Jane Austen.
        </p>
      </IntegrantesDatos>

      <IntegrantesDatos img={Chicas} smallText>
        <p>
          Nos reunimos a leer, debatir y dialogar sobre Austen y el contexto
          histórico, social y cultural en el cual se inserta su obra. Asimismo,
          orientamos nuestras inquietudes en torno a la trascendencia e impacto
          de su obra a través de los siglos. Sobre todo, su preponderancia en
          pleno siglo XXI.
        </p>
        <br />
        <p>
          Con el objetivo de difundir nuestras reflexiones, realizamos
          encuentros culturales, charlas, conversatorios y reuniones de carácter
          público. ¡Todos están invitados! El único requisito es querer
          disfrutar de la maravillosa narrativa de Jane Austen.
        </p>
      </IntegrantesDatos>
    </div>
  );
};
export default Integrantes;
