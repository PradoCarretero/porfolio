import "../styles/ProjectList.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectsData from "../data/projects";
import sqlIcon from "../images/sql.png";
import tailwindIcon from "../images/tailwind.png";

function ProjectList() {
  const getIconReact = (project) => {
    if (project.tecnologies.toLowerCase().includes("react")) {
      return <i className="fa-brands fa-xl fa-react"></i>;
    }
  };
  const getIconHtml = (project) => {
    if (project.tecnologies.toLowerCase().includes("html")) {
      return <i className="fa-brands fa-xl fa-html5"></i>;
    }
  };
  const getIconCss = (project) => {
    if (project.tecnologies.toLowerCase().includes("css")) {
      return <i className="fa-brands fa-xl fa-css3"></i>;
    }
  };
  const getIconJs = (project) => {
    if (project.tecnologies.toLowerCase().includes("js")) {
      return <i className="fa-brands fa-xl fa-js"></i>;
    }
  };
  const getIconNode = (project) => {
    if (project.tecnologies.toLowerCase().includes("node")) {
      return <i className="fa-brands fa-xl fa-node-js"></i>;
    }
  };
  const getIconVue = (project) => {
    if (project.tecnologies.toLowerCase().includes("vue")) {
      return <i className="fa-brands fa-xl fa-vuejs"></i>;
    }
  };
  const getIconApi = (project) => {
    if (project.tecnologies.toLowerCase().includes("api")) {
      return <i className="fa-solid fa-xl fa-cloud"></i>;
    }
  };
  const getIconSql = (project) => {
    if (project.tecnologies.toLowerCase().includes("sql")) {
      return <img src={sqlIcon} className="project__icon" alt=""></img>;
    }
  };
  const getIconTailwind = (project) => {
    if (project.tecnologies.toLowerCase().includes("tailwind")) {
      return <img src={tailwindIcon} className="project__icon" alt=""></img>;
    }
  };
  const projectElements = projectsData.map((project, i) => {
    return (
      <article key={i} className="item project__wrapper">
        <section className="project__overlay project__overlay__text">
          <h2>{project.title}</h2>
          <section>
            {getIconHtml(project)}
            {getIconCss(project)}
            {getIconTailwind(project)}
            {getIconReact(project)}
            {getIconJs(project)}
            {getIconVue(project)}
            {getIconNode(project)}
            {getIconApi(project)}
            {getIconSql(project)}
          </section>
        </section>
        <img
          className="project__img"
          src={require("../images/" + project.nameimg + ".png")}
          alt=""
        />
      </article>
    );
  });

  return (
    <main>
      <OwlCarousel
        className="owl-theme"
        items="1"
        dots
        autoplay
        loop
        margin={10}
        autoplayHoverPause
        autoplayTimeout="2000"
      >
        {projectElements}
      </OwlCarousel>
    </main>
  );
}
ProjectList.defaultProps = {};

ProjectList.propTypes = {};
export default ProjectList;
