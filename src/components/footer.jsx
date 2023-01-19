import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link
        id="scrollToTop"
        to="about"
        spy={true}
        smooth={true}
        offset={-86}
        duration={500}
        className="m-4 p-3 bottom-0 end-0 lh-1 bg-primary text-white rounded-circle shadow position-fixed"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </Link>
      <footer id="footer" className="py-5 bg-light text-center">
        <p className="mb-0">{t("footer.copy")}</p>
      </footer>
    </>
  );
};

export default Footer;
