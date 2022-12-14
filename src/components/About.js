import "../styles/About.scss";
import background from "../images/me4.png";

function About() {
  return (
    <main className="">
      <article>
        <h2>Hola! Soy Prado!</h2>
        <p>
          Soy una persona de naturaleza <b>creativa</b> y apasionada por los
          lenguajes visuales. Soy de esas personas que duermen con un cuaderno
          en la mesilla de noche, porque siempre tengo algún proyecto entre
          manos.
        </p>
        <p>
          Una <b>profesional proactiva</b>, con capacidad de <b>adaptación</b> y
          cualidades para trabajar tanto en <b>equipo</b> como de manera
          individual.
        </p>
      </article>
      <img className="project__img" src={background} alt="" />
    </main>
  );
}
About.defaultProps = {};

About.propTypes = {};
export default About;
