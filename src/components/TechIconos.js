import "../styles/TechIconos.scss";
import sqlIcon from "../images/sql.png";
import sqlIconOrg from "../images/sql-org.png";
import tailwindIcon from "../images/tailwind.png";
import tailwindIconOrg from "../images/tailwind-org.png";

function TechIconos(props) {
  const tecnologies = props.tecnologies;
  const getIconReact = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("react")) {
      return <i className="fa-brands fa-xl fa-react"></i>;
    }
  };
  const getIconHtml = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("html")) {
      return <i className="fa-brands fa-xl fa-html5"></i>;
    }
  };
  const getIconCss = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("css")) {
      return <i className="fa-brands fa-xl fa-css3"></i>;
    }
  };
  const getIconJs = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("js")) {
      return <i className="fa-brands fa-xl fa-js"></i>;
    }
  };
  const getIconNode = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("node")) {
      return <i className="fa-brands fa-xl fa-node-js"></i>;
    }
  };
  const getIconVue = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("vue")) {
      return <i className="fa-brands fa-xl fa-vuejs"></i>;
    }
  };
  const getIconApi = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("api")) {
      return <i className="fa-solid fa-xl fa-cloud"></i>;
    }
  };
  const getIconSql = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("sql")) {
      return (
        <>
          <div className="tech__img__mvl">
            <img src={sqlIconOrg} className="tech__img" alt="sql icon"></img>
          </div>
          <div className="tech__img__dsk">
            <img src={sqlIcon} className="tech__img" alt="sql icon"></img>
          </div>
        </>
      );
    }
  };
  const getIconTailwind = (tecnologies) => {
    if (tecnologies.toLowerCase().includes("tailwind")) {
      return (
        <>
          <div className="tech__img__mvl">
            <img
              src={tailwindIconOrg}
              className="tech__img"
              alt="tailwind icon"
            ></img>
          </div>
          <div className="tech__img__dsk">
            <img
              src={tailwindIcon}
              className="tech__img"
              alt="tailwind icon"
            ></img>
          </div>
        </>
      );
    }
  };
  return (
    <section className="tech">
      {getIconHtml(tecnologies)}
      {getIconCss(tecnologies)}
      {getIconTailwind(tecnologies)}
      {getIconReact(tecnologies)}
      {getIconJs(tecnologies)}
      {getIconVue(tecnologies)}
      {getIconNode(tecnologies)}
      {getIconApi(tecnologies)}
      {getIconSql(tecnologies)}
    </section>
  );
}
TechIconos.defaultProps = {};

TechIconos.propTypes = {};
export default TechIconos;
