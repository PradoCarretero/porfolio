import "../styles/ProjectList.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectsData from "../data/projects";
import TechIconos from "./TechIconos";

function ProjectList() {
  const projectElements = projectsData.map((project) => {
    return (
      <>
        <article key={project.id} className="item project">
          <section className="project__overlay project__circle">
            <h2>{project.title}</h2>
            <TechIconos tecnologies={project.tecnologies} />
          </section>
          <img
            className="project__img project__circle"
            src={require("../images/" + project.nameimg + ".png")}
            alt=""
          />
          <div className="project__desktop">
            <TechIconos tecnologies={project.tecnologies} />
          </div>
        </article>
      </>
    );
  });

  return (
    <>
      <main>
        <section className="project__desktop">
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
        </section>
        <section className="project__tablet">
          <OwlCarousel
            className="owl-theme"
            items="3"
            autoplay
            loop
            margin={20}
            autoplayHoverPause
            autoplayTimeout="2000"
          >
            {projectElements}
          </OwlCarousel>
        </section>
      </main>
    </>
  );
}
ProjectList.defaultProps = {};

ProjectList.propTypes = {};
export default ProjectList;
