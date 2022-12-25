import "../styles/About.scss";
import picture from "../images/me.png";

function About() {
  return (
    <main className="about">
      <article className="about__txt font-light">
        <p className="about__txt__parg">
          Soy una persona <b>flexible</b>, <b>trabajadora</b> y
          <b>multidisciplinar</b> en mi recorrido. Estudié arquitectura y he
          estado 5 años trabajando en diferentes campos recorriendo un camino
          técnico-artístico, hasta dar con el mundo de la programación.
        </p>
        <p className="about__txt__parg">
          Valoro mucho los <b>lenguajes visuales</b>, los detalles a nivel
          <b>pixel perfect</b> y el <b>código limpio y ordenado</b>. He
          realizado el <b>bootcamp de Adalab</b> de programación Web orientado a
          <b>front-end</b> y actualmente me formo en la
          <b>academia de 42 Madrid</b> para consolidar un perfil
          <b>full-stack</b>.
        </p>
        <p className="about__txt__parg">
          Me encantaría formar parte del equipo de una empresa que me permita
          enfrentarme a nuevos <b>retos</b> y seguir <b>aprendiendo</b> y
          aportar <b>valor</b>.
        </p>
      </article>
      <article className="project">
        <img className="project__img" src={picture} alt="" />
      </article>
    </main>
  );
}
About.defaultProps = {};

About.propTypes = {};
export default About;
