import "../styles/ProjectItem.scss";

function ProjectItem(props) {
  return (
    <img src={props.img} className="project__img" alt="logo prado carretero" />
  );
}
ProjectItem.defaultProps = {};

ProjectItem.propTypes = {};
export default ProjectItem;
