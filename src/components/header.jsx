import logo from "../assets/img/layout/logo.png";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    const { t, i18n } = useTranslation();
  return (
    <header className="p-3 text-bg-secondary shadow">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 me-4 mb-lg-0 text-white text-decoration-none"
          >
            <img src={logo} width="75px" height="auto" alt="Logo" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 text-warning">
                {t('header.about')}
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
              {t('header.skills')}
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
              {t('header.certifications')}
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
              {t('header.projects')}
              </a>
            </li>
          </ul>

          <ul className="socialIcons nav col-12 col-lg-auto mb-2 me-4 justify-content-center mb-md-0">
            <li>
              <a
                href="https://github.com/josedoneguillen"
                target="_blank"
                className="nav-link text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/12815185/jos%c3%a9-do%c3%b1e"
                target="_blank"
                className="nav-link text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </li>
            <li>
              <a
                href="https://do.linkedin.com/in/jos%C3%A9-manuel-do%C3%B1e-guill%C3%A9n-94806419a?trk=people-guest_people_search-card"
                target="_blank"
                className="nav-link text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <select onChange={(event)=>{ i18n.changeLanguage(event.target.value) }} className="form-select form-control form-control-dark text-white text-bg-secondary">
              <option value="en">English</option>
              <option value="es">Espa??ol</option>
            </select>
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-warning">
            {t('header.contact')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
