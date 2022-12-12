import "../styles/ProjectList.scss";
import ProjectItem from "./ProjectItem";
import project1 from "../images/project1.png";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.webp";

function ProjectList() {
  return (
    <main /* className="project" */>
      {/*  <ProjectItem img={project1} />
      <ProjectItem img={project2} />
      <ProjectItem img={project3} /> */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <article class="carousel-item active">
            <div className="project__wrapper">
              <img src={project1} class="d-block project__img" alt="..." />
            </div>
          </article>
          <article class="carousel-item">
            <div className="project__wrapper">
              <img src={project2} class="d-block project__img" alt="..." />
            </div>
          </article>
          <article class="carousel-item">
            <div className="project__wrapper">
              <img src={project3} class="d-block project__img" alt="..." />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
ProjectList.defaultProps = {};

ProjectList.propTypes = {};
export default ProjectList;
