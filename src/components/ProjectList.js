import "../styles/ProjectList.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectsData from "../data/projects";

function ProjectList() {
  let htmlIcon = "";
  const getIcon = (project) => {
    if (project.tecnologies.toLowerCase().includes("react"))
      htmlIcon += <i className="fa-brands fa-react"></i>;
    else if (project.tecnologies.toLowerCase().includes("html"))
      htmlIcon += <i className="fa-brands fa-html5"></i>;
    else if (project.tecnologies.toLowerCase().includes("css"))
      htmlIcon += <i className="fa-brands fa-css3"></i>;
    return htmlIcon;
  };
  const projectElements = projectsData.map((project, i) => {
    return (
      <article key={i} className="item project__wrapper">
        <section className="project__overlay project__overlay__text">
          <h2>{project.title}</h2>
          <a
            className=""
            href={project.github}
            title={`ir a github de${project.title}`}
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github project__overlay__text"></i>
          </a>
          <a
            className=""
            href={project.page}
            title={`ir a la página de${project.title}`}
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-eye project__overlay__text"></i>
          </a>
          {getIcon(project)}
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
        items="3"
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
