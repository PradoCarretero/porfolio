import "../styles/NavFooter.scss";

function NavFooter() {
  return (
    <ul className="footer__nav">
      <li>
        <a
          className="link"
          href="https://www.linkedin.com/in/pradocarretero/"
          title="ir a linkedin de Prado"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in fa-xs footer__nav__iconos"></i>
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
          <i class="fa-brands fa-github-alt fa-xs footer__nav__iconos"></i>
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
          <i className="fa-solid fa-envelope fa-xs footer__nav__iconos"></i>
        </a>
      </li>
    </ul>
  );
}
NavFooter.defaultProps = {};

NavFooter.propTypes = {};
export default NavFooter;
