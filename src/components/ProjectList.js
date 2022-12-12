import "../styles/ProjectList.scss";
import ProjectItem from "./ProjectItem";
import project1 from "../images/project1.png";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.webp";
import projectsData from "../data/projects";

function ProjectList() {
  console.log(projectsData[0].src);
  const projectElements = projectsData.map((project, i) => {
    return (
      <article key={i} className={`carousel-item ${i === 0 ? `active` : ``}`}>
        <section>
          <h2>{project.title}</h2>
          <p>{project.year}</p>
        </section>
        <div className="project__wrapper">
          <img
            className="d-block  project__img"
            src={require("../images/" + project.title + ".png")}
            alt=""
          />
        </div>
      </article>
    );
  });

  return (
    <main /* className="project" */>
      {/*  <ProjectItem img={project1} />
      <ProjectItem img={project2} />
      <ProjectItem img={project3} /> */}
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">{projectElements}</div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </main>
  );
}
ProjectList.defaultProps = {};

ProjectList.propTypes = {};
export default ProjectList;
