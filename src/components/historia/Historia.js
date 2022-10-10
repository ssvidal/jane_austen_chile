import "./Historia.css";
import React from "react";

import Bio1 from "../../assets/bio1.png";
import Bio2 from "../../assets/bio2.png";
import Bio3 from "../../assets/bio3.png";
import Bio4 from "../../assets/bio4.png";
import Bio5 from "../../assets/bio5.png";
import Bio6 from "../../assets/bio6.png";
import Bio7 from "../../assets/bio7.png";
import Bio8 from "../../assets/bio8.png";
import Bio9 from "../../assets/bio9.png";
import Bio10 from "../../assets/bio10.png";
import Bio11 from "../../assets/bio11.png";
import Bio12 from "../../assets/bio12.png";
import Bio13 from "../../assets/bio13.png";
import Bio14 from "../../assets/bio14.png";
import Bio15 from "../../assets/bio15.png";
import Bio16 from "../../assets/bio16.png";
import Bio17 from "../../assets/bio17.png";
import Bio18 from "../../assets/bio18.png";
import Bio19 from "../../assets/bio19.png";
import Bio20 from "../../assets/bio20.png";
import Bio21 from "../../assets/bio21.png";
import Tumba from "../../assets/tumba.png";
import HistoriaDatos from "./datos/HistoriaDatos";

const Historia = () => {
  return (
    <div className="container">
      <div className="inicio">
        <div className="inicio-info">
          <HistoriaDatos title="Historia" img={Bio1} smallText>
            <p>
              La novelista británica Jane Austen nació el 16 de diciembre de
              1775 en la rectoría de Steventon, en Hampshire, donde su padre fue
              rector de las parroquias anglicanas desde 1765 hasta 1801. La
              familia Austen, perteneciente a la baja aristocracia inglesa, era
              una familia muy numerosa y unida. Aunque nunca pudieron llevar una
              vida de grandes lujos, sus ingresos alcanzaban para cubrir las
              necesidades inherentes a su posición social. El reverendo y su
              esposa tuvieron ocho hijos, de los cuales sólo dos fueron mujeres,
              Jane y su hermana mayor Cassandra, con la que mantuvo toda su vida
              una estrecha relación de amistad. Uno de los hijos, Edward, fue
              adoptado por unos parientes ricos, los Knight, que al no tener
              hijos propios querían hacer de él su heredero.
            </p>
          </HistoriaDatos>
        </div>
      </div>
      <HistoriaDatos title="Cassandra Austen" img={Bio2} smallText>
        <p>
          Jane y Cassandra asistieron juntas a un internado en Oxford, regentado
          por Mrs Ann Cawley, que posteriormente se trasladó a Southampton. Sin
          embargo, pronto cayeron enfermas y tuvieron que regresar a su hogar.
        </p>
        <p>
          Más tarde las enviaron a otra institución en Reading, pero el gasto
          resultó demasiado alto para la familia y las jóvenes volvieron a casa
          donde su padre, hombre culto y educado, se ocupó personalmente de su
          educación. La rectoría contaba con una amplia biblioteca de la que
          Jane pudo disfrutar a sus anchas.
        </p>
        <br />
        <p>
          Los hermanos varones también habían ido abandonando el hogar poco a
          poco, pero cuando se reunían en vacaciones organizaban
          representaciones teatrales en las que todos los jóvenes Austen
          participaban.
        </p>
      </HistoriaDatos>
      <HistoriaDatos title="Juvenilia" img={Bio3}>
        <p>
          Entre 1787 y 1793, Jane escribió, para el divertimento de su familia,
          su Juvenilia, que incluye diversas parodias de la literatura de la
          época que se recogieron posteriormente en tres volúmenes. A este grupo
          pertenecen “La historia de Inglaterra”, “Amor y amistad”, “El castillo
          de Lesley” y “Catherine o el cenador”.
        </p>
        <p>
          Las visitas a las familias vecinas eran parte del ritual de la época y
          Jane llegó a establecer lazos de amistad para toda la vida con algunas
          de ellas, por ejemplo con los Lloyd en Deane, los Lefroy en Ashe y con
          las Biggs de la mansión Manydown.
        </p>
        <br />
        <p>
          Los Austen se hacían acompañar por sus hijas en las visitas a sus
          parientes en otros condados, principalmente Kent, donde también vivía
          Edward con sus padres adoptivos. Cuando éste se casó, solía invitar a
          alguna de sus hermanas a pasar temporadas en su casa. Ese fue el
          inicio de la correspondencia entre Jane Austen y Cassandra.
        </p>
      </HistoriaDatos>

      <HistoriaDatos title="Tom Lefroy" img={Bio5}>
        <p>
          En 1792 Cassandra se comprometió con Tom Fowle, un antiguo pupilo de
          su padre, amigo de sus hermanos, que iba a ser clérigo. Sin embargo,
          había un obstáculo para que pudiera celebrarse el matrimonio, el joven
          Fowle no tenía los recursos para sostener una esposa y un hogar, así
          que esperarían a que él forjase el patrimonio para ambos.
        </p>

        <p>
          Durante el invierno de 1795 Jane conoció a Tom Lefroy, un joven
          irlandés que pasó una temporada en casa de sus parientes los Lefroy de
          Ashe. De las cartas que envió a Cassandra hablando del muchacho se
          deduce que se sentían atraídos el uno por el otro, pero dado que
          ninguno poseía el dinero que les permitiese formalizar su relación,
          Tom fue enviado lejos de allí y nunca más volvió.
        </p>
      </HistoriaDatos>

      <HistoriaDatos img={Bio6}>
        <p>
          Jane se volcó en sus escritos y entre 1795 y 1799 redactó las primeras
          versiones de las novelas que luego se publicarían con los nombres de
          Sentido y sensibilidad, Orgullo y prejuicio y La abadía de Northanger
          (que entonces llevaban los títulos de Elinor and Marianne, First
          Impressions, y Susan, respectivamente). Probablemente también escribió
          Lady Susan en esta época.
        </p>
        <br />
        <p>
          Tom Fowle, el prometido de Cassandra había viajado a las Antillas
          acompañando a un pariente rico que le prometió ayudarle, pero murió en
          febrero de 1797, presa de una enfermedad tropical y con él
          desaparecieron las expectativas de Cassandra de contraer matrimonio.
        </p>

        <p>
          Ese mismo año, Mr. Austen hizo un intento de publicar Orgullo y
          prejuicio, pero el editor la rechazó. Unos años más tarde, en 1803,
          Susan fue aceptada para publicación sin que apareciese impresa.
        </p>
      </HistoriaDatos>

      <HistoriaDatos title="Sydney Place, Bath (1801-1804)" img={Bio8}>
        <p>
          En 1799 Mr. Austen decidió retirarse, dejar la rectoría de Steventon a
          cargo de su hijo mayor James (que después de enviudar y casado en
          segundas nupcias necesitaba el beneficio eclesiástico de su padre) e
          ir a vivir a Bath, donde con un círculo social más amplio, sus hijas
          quizá podrían encontrar marido.
        </p>
        <br />
        <p>
          Jane recibió la noticia con verdadero desagrado. Estaba muy apegada a
          la vida tranquila en el campo, y encontraba la ciudad demasiado
          bulliciosa. Además el traslado supuso tener que desprenderse de
          objetos realmente valiosos para ella, como su piano y la biblioteca de
          su padre, que fue vendida por lotes.
        </p>
        <p>
          Durante 6 años la familia vivió en Bath, pero las hermanas Austen no
          consiguieron contraer matrimonio, como sus padres hubieran deseado.
          Parece que Jane sufrió una cierta depresión que la mantuvo alejada
          incluso de la pluma, puesto que no produjo ninguna novela en estos
          años.
        </p>
      </HistoriaDatos>

      <HistoriaDatos title="Francis Austen" img={Bio11}>
        <p>
          En 1805 murió el padre, y la viuda y las dos hijas se vieron en
          dificultades económicas. Tras mudarse a un alojamiento más humilde
          durante un tiempo, dejaron la ciudad para visitar a unos parientes de
          la madre en la rectoría de Adlestrop en Gloucestershire.
        </p>

        <p>
          En 1807 se trasladaron a vivir con uno de los hermanos Austen, Frank,
          marino que acababa de casarse y fijar su residencia en el puerto de
          Southampton.
        </p>
        <br />
        <p>
          Durante esta época, Jane hacía escapadas a Londres para visitar a su
          hermano favorito, Henry, convertido en un próspero banquero, y se daba
          el lujo de asistir al teatro y a exposiciones artísticas.
        </p>

        <p>
          En esa época tuvo una oferta matrimonial por parte del hermano menor
          de unas amigas, Harris Bigg-Wither. En principio la aceptó, pero a la
          mañana siguiente, tras haber reconsiderado la situación, se retractó.
        </p>
      </HistoriaDatos>

      <HistoriaDatos title="Chawton Cottage" img={Bio13}>
        <p>
          Fue en 1809, cuando finalmente Edward Austen Knight, que había
          enviudado recientemente, ofreció un alojamiento definitivo para su
          madre y sus hermanas en sus terrenos de Hampshire. Les ofreció una
          casita en el poblado de Chawton, denominada Chawton Cottage. Martha
          Lloyd, amiga y emparentada con la familia, se encontraba en una
          situación similar, y la invitaron a ir a vivir con ellas. Así pasaría
          Jane Austen la mayor parte del resto de su vida. El regreso a
          Hampshire le devolvió la energía perdida y en los ocho años que le
          quedaban de vida, se volcó en la escritura.
        </p>
      </HistoriaDatos>
      <HistoriaDatos title="By a lady" img={Bio7}>
        <p>
          En primer lugar revisó Sentido y sensibilidad y Orgullo y prejuicio y,
          con la ayuda de su hermano Henry, consiguió publicar la primera en
          1811. El nombre de la autora no aparecía, la novela figuraba escrita
          “by a lady”. Dos años después, en 1813, también consiguieron que se
          publicara la segunda, y esta vez figuraba “por la autora de Sentido y
          sensibilidad”.
        </p>

        <br />
        <p>
          Ambas obras se granjearon un público y reseñas más que favorables y
          Henry Austen no pudo resistir la tentación de revelar a sus conocidos
          que la autora era su hermana, con lo que la identidad de la escritora
          se convirtió en un secreto a voces.
        </p>
        <p>
          Animada por estos éxitos, Jane se centró en seguir escribiendo y
          gracias a ello vieron la luz Mansfield Park en 1814 y Emma en 1815,
          esta vez publicadas por John Murray, renombrado editor de lord Byron.
          El éxito fue aún mayor y entre sus seguidores se contaba el príncipe
          regente, a quien se había visto forzada a dedicar Emma.
        </p>
      </HistoriaDatos>

      <HistoriaDatos
        title="Catedral de Winchester"
        img={Tumba}
        link="https://www.instagram.com/reel/CTLVKryBRvU/"
      >
        <p>
          En 1816 la autora empezó a encontrarse mal, a sentirse muy fatigada y
          poco a poco se fue quedando impedida. Con los conocimientos actuales
          parece claro que estaba aquejada de la enfermedad de Addison (una
          infección tuberculosa en los riñones). A pesar de ello, consiguió
          escribir otra novela, Persuasión, e incluso comenzar otra más
          (Sanditon) que, desafortunadamente, quedó incompleta, al morir ella el
          18 de julio de 1817, a los 41 años de edad. Unos días después fue
          enterrada en la catedral de Winchester.
        </p>
        <br />
        <p>
          Puedes hacer click en la fotografia para ver nuestra visita en el año
          2021.
        </p>
      </HistoriaDatos>

      <HistoriaDatos img={Bio17}>
        <p>
          Henry Austen hizo público entonces que la autora de Emma y Orgullo y
          prejuicio era su hermana Jane y se ocupó de la publicación póstuma de
          La abadía de Northanger (pendiente de publicación desde el año 1803) y
          de Persuasión, que vieron la luz en 1818.
        </p>
        <p>
          Sir Walter Scott menciona en sus diarios que Jane Austen poseía “el
          toque exquisito que transforma personajes y situaciones del todo
          comunes en algo interesante”.
        </p>
        <p>
          Ese es, en efecto, el secreto de su arte, narrar las vicisitudes de un
          puñado de personajes corrientes en plena campiña inglesa con humor,
          ironía e inteligencia.
        </p>
      </HistoriaDatos>
      <HistoriaDatos img={Bio19}>
        <p>
          Las seis novelas acabadas giran en torno al tema del matrimonio y de
          si éste es o no oportuno. La frase inicial de Orgullo y prejuicio (una
          de las frases más celebres de la novelística inglesa) lo deja bien
          claro: “Es una verdad universalmente reconocida que un hombre soltero,
          poseedor de una gran fortuna, necesita una esposa”.
        </p>
        <p>
          En toda las novelas se complace en hacer un irónico seguimiento de
          quién se casará con quién y son las madres y otras mujeres maduras del
          entorno las más proclives a hacer combinaciones, lo cual da pie a la
          autora a caricaturizarlas sin piedad.
        </p>
      </HistoriaDatos>

      <HistoriaDatos img={Bio18}>
        <p>
          Pero la postura de Austen no es totalmente pura, ya que aunque le
          desagradan los meros matrimonios por interés, no ve con malos ojos que
          sus protagonistas se enamoren de jóvenes de sólida posición económica.
          El dinero y la posición social tienen un peso central en toda su obra.
        </p>
        <br />
        <p>
          El diálogo es otro de sus grandes logros. Sus novelas están llenas de
          conversaciones que la autora maneja magistralmente.
        </p>
        <p>
          Además de todo esto, cada una de sus novelas constituye un maravilloso
          reflejo de la sociedad rural de la época.
        </p>
        <p>
          Jane Austen es considerada la primera novelista inglesa moderna y en
          la actualidad su obra sigue viva e influyente, su recepción va más
          allá del interés académico, siendo leída por un amplio público. A ello
          ha contribuido también la gran profusión de adaptaciones
          cinematográficas y televisivas de todas sus novelas.
        </p>
      </HistoriaDatos>
    </div>
  );
};
export default Historia;
