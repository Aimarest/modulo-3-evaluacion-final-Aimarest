import "../styles/Footer.scss";

function Footer() {
  return (
    <section>
      <p className="Footer__text">
        <i className="fa-regular fa-copyright"></i>2022 Ana Isabel Marcos
        Estévez
      </p>

      <nav className="Footer">
        <p className="Footer__text">
          If you are interested in contacting me, click on the icon of my social
          networks:
        </p>
        <ul className="Footer__list">
          <li className="Footer__link">
            <a
              className="Footer__icon"
              href="https://www.linkedin.com/in/ana-marcos-est%C3%A9vez-7ab986232/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="Footer__link">
            <a
              className="Footer__icon"
              href="https://twitter.com/anamarcosestev1"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="Footer__link">
            <a
              className="Footer__icon"
              href="https://github.com/aimarest"
              target="_blank"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </li>
          <li className="Footer__link">
            <a
              className="Footer__icon"
              href="mailto:amarcosestevez@gmail.com"
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;
