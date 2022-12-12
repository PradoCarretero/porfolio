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
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <article class="carousel-item active ">
            <div className="project__wrapper">
              <img src={project1} class=" project__img" alt="..." />
            </div>
          </article>
          <article class="carousel-item ">
            <div className="project__wrapper">
              <img src={project2} class=" project__img" alt="..." />
            </div>
          </article>
          <article class="carousel-item ">
            <div className="project__wrapper">
              <img src={project3} class=" project__img" alt="..." />
            </div>
          </article>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </main>
  );
}
ProjectList.defaultProps = {};

ProjectList.propTypes = {};
export default ProjectList;
