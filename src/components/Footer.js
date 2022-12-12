import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items"></div>
      <Link className="link footer__items" to="/" title="ir a home">
        <h2 className="footer__title ">front end developer</h2>
      </Link>
      <ul className="footer__nav footer__items">
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/pradocarretero/"
            title="ir a linkedin de Prado"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://github.com/PradoCarretero"
            title="ir a github de Prado"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="link"
            href="mailto:p.carreteroayala@gmail.com"
            title="enviar email a Prado"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
Footer.defaultProps = {};

Footer.propTypes = {};
export default Footer;
