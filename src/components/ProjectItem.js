import "../styles/ProjectItem.scss";
import "../styles/ProjectList.scss";

function ProjectItem(props) {
  return (
    <article className="carousel-item active ">
      <div className="project__wrapper">
        <img
          src={props.img}
          className="project__img"
          alt="logo prado carretero"
        />
      </div>
    </article>
  );
}
ProjectItem.defaultProps = {};

ProjectItem.propTypes = {};
export default ProjectItem;
