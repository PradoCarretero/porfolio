import "../styles/ProjectList.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/projects";

function ProjectList() {
  const projectElements = projectsData.map((project, i) => {
    return (
      <article key={i} className="item project__wrapper">
        <img
          className="project__img"
          src={require("../images/" + project.title + ".png")}
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
        nav
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
