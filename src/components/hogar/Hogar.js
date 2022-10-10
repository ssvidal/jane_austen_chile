import "./Hogar.css";
import React from "react";
import Casa from "../../assets/Casa.png";
import Residencia from "../../assets/Residencia.png";
import Salon from "../../assets/Salon.png";
import SalonLibros from "../../assets/Salonlibros.png";
import Joya from "../../assets/Joya.png";
import Virtual from "../../assets/Virtual.png";
import HogarCard from "./card/HogarCard";

const Hogar = () => {
  return (
    <div className="container">
      <div className="inicio">
        <div className="inicio-img-container">
          <img className="img" src={Casa} alt="casa" />
        </div>
        <div className="inicio-info">
          <h4 className="titulo-inicio">Casa Museo de Jane Austen</h4>
          <p>
            A primera vista, la cabaña Chawton de ladrillos rojos se parece a
            cualquier otra casa de la cuadra, pero este modesto edificio del
            siglo XVII tiene un importante reclamo de fama para los fanáticos de
            la literatura. El difunto hogar de la icónica novelista británica
            Jane Austen, que vivió allí desde 1809 hasta su muerte en 1817, el
            edificio se transformó en la Casa Museo Jane Austen en 1949 y ahora
            se considera una atracción imperdible para los fanáticos de Austen
            que visitan Inglaterra. Esta fue la casa donde Austen terminó obras
            clásicas como Orgullo y prejuicio y escribió sus últimas tres
            novelas, incluida Emma, y los fanáticos pueden echar un vistazo a su
            escritorio, dormitorio y cocina, así como ver una colección de
            retratos de Austen, recuerdos, manuscritos y efectos personales,
            incluidos artículos de joyería. También hay una biblioteca de libros
            relacionados con Austen, una tienda de regalos bien surtida y un
            jardín, donde los visitantes pueden hacer un picnic.
          </p>
        </div>
      </div>
      <HogarCard title="Residencia de Jane Austen" img={Residencia} smallText>
        <p>
          Anteriormente hogar de granjeros locales, la casa fue brevemente una
          taberna, The New Inn, entre 1781 y 1787. El pub fue el lugar de dos
          asesinatos, y después del segundo asesinato, la casa fue alquilada por
          el hermano de Jane Austen, Edward Austen Knight. a su alguacil,
          Bridger Seward.
        </p>
        <p>
          Más tarde, Edward Austen Knight permitió que su madre y sus hermanas
          vivieran en la casa para que tuvieran una residencia permanente. Jane
          Austen vivió en la casa con su madre, su hermana Cassandra y una vieja
          amiga de la familia, Martha Lloyd, desde el 7 de julio de 1809 hasta
          mayo de 1817, cuando debido a una enfermedad se mudó a Winchester para
          estar cerca de su médico. Murió en Winchester el 18 de julio de 1817.
          Su madre y su hermana continuaron viviendo en la casa hasta su muerte
          en 1827 y 1845 respectivamente.
        </p>
        <p>
          Cuando llegó a Chawton, Jane Austen había escrito tres novelas en
          forma de borrador; estos fueron Sentido y sensibilidad, Orgullo y
          prejuicio y Northanger Abbey. Es posible que revisara estas novelas en
          la casa antes de publicarlas. Además, fue aquí donde escribió
          Mansfield Park, Emma and Persuasion.
        </p>
      </HogarCard>

      {/* historia */}
      <HogarCard title="Museo" img={Salon}>
        <p>
          Tras la muerte de Cassandra, la casa se dividió en pequeños
          apartamentos para los trabajadores, antes de que parte del edificio se
          convirtiera en un club de trabajadores a principios del siglo XX. El
          resto de la casa se dividió en cabañas para trabajadores de la finca y
          se conocía como Petty Johns y Chawton Cottage.
        </p>
        <p>
          La Casa Museo de Jane Austen se estableció en 1947 y hasta 2014 estuvo
          gobernada por el Jane Austen Memorial Trust. Edward Knight vendió la
          casa a Thomas Edward Carpenter por £ 3,000 en 1948 (£ 116,056 a partir
          de 2022).{" "}
        </p>
        <p>
          La casa se entregó en fideicomiso en 1949 en memoria del hijo de
          Carpenter, el teniente Philip John Carpenter, del 1.er Batallón del
          Regimiento de East Surrey, "que cayó mientras dirigía a sus hombres en
          Trasimene, Italia, el 30 de junio de 1944, a los 22 años".
        </p>
      </HogarCard>
      {/* Colección de otros artículos y muebles de la familia Austen */}
      <HogarCard
        smallText
        title="Colección de otros artículos y muebles de la familia Austen"
        img={SalonLibros}
      >
        <p>
          El museo se abrió al público en julio de 1949 y es visitado por
          aproximadamente 40.000 personas cada año. Ahora es propiedad y está
          dirigido por la Casa Museo CIO de Jane Austen, una organización
          benéfica registrada que tiene como objetivos "el avance de la
          educación y, en particular, el estudio de la literatura inglesa,
          especialmente las obras de Jane Austen".
        </p>
        <p>
          La colección del Museo incluye ocho libros de música propiedad de Jane
          Austen, con piezas transcritas de su puño y letra. Además, entre los
          elementos del mobiliario de Jane Austen que se exhiben en el museo se
          encuentran un pianoforte Muzio Clementi (fechado en 1813) y una
          cómoda-estantería Hepplewhite que contiene varias de sus obras. El
          museo también tiene una colección de otros artículos y muebles de la
          familia Austen.
        </p>
      </HogarCard>
      {/* El anillo se exhibió en el museo en febrero de 2014. */}
      <HogarCard
        title="El anillo se exhibió en el museo en febrero de 2014."
        img={Joya}
      >
        <p>
          El museo posee las únicas tres piezas de joyería que se sabe que
          fueron propiedad de Austen, un brazalete de cuentas de turquesa, una
          cruz de topacio y un anillo de oro y turquesa. El anillo de oro había
          permanecido en la familia de Austen hasta su venta en 2012 en una
          subasta a la cantante estadounidense Kelly Clarkson. El gobierno
          británico prohibió la exportación del anillo debido a su importancia
          histórica, y el museo finalmente compró el anillo antes de la fecha
          límite de exportación, con la ayuda de 100 000 libras esterlinas de un
          donante anónimo. El anillo se exhibió en el museo en febrero de 2014.
        </p>
      </HogarCard>
      <p>
        Se llevan a cabo eventos regulares en el museo, tanto para una mayor
        apreciación de Jane Austen como para alentar a los nuevos escritores.
        También hay recitales utilizando el piano de Clementi y actuaciones
        basadas en sus obras.
      </p>
      {/* Visita virtual a la casa de Jane Austen. */}

      <div className="museo-virtual">
        <div className="museo-info">
          <h1 className="titulo-inicio">
            Visita virtual a la casa de Jane Austen.
          </h1>
          <h4 className="museo-subtitulo">
            Exploracion de la casa, las dependencias y el jardínen el recorrido
            virtual de 360°
          </h4>
          <p>
            Visita la Casa de Jane Austen desde la comodidad de su
            hogar.¡Precione la imagen y pasee por la casa recorrido virtual,
            disfrute de una exposición en línea o visite la tienda de regalos!
          </p>
        </div>
        <div className="museo-img-container">
          <a
            href="https://www.pan3sixty.co.uk/virtual-tours/jane-austens-house/virtual-tour.html#chawton_village_street"
            target="_blank"
          >
            <img className="img" src={Virtual} alt="casa-virtual" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hogar;
