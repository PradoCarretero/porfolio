import { Link } from "react-router-dom";
import imgname from "../images/logo-name.png";
import "../styles/Header.scss";
import "../styles/core/fonts.scss";

function Header() {
  return (
    <header className="header font-1">
      <Link className="link" to="/" title="ir a home">
        <img
          src={imgname}
          className="header__logo"
          alt="logo prado carretero"
        />
      </Link>

      <nav className="font-1">
        <ul className="header__nav">
          <li>
            <Link className="link" to="/" title="ir a proyectos">
              proyectos
            </Link>
          </li>
          <li>
            <Link className="link" to="/about-me" title="ir a sobre mí">
              sobre mi
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact" title="ir a contacto">
              contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
Header.defaultProps = {};

Header.propTypes = {};
export default Header;
