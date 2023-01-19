import { useTranslation } from "react-i18next";
import languages from "../assets/img/layout/languages.png";
import scrum from "../assets/img/badges/Scrum-Foundation-Professional-Certificate-SFPC_-2021_480x480.webp";
import remoteWork from "../assets/img/badges/remote_work_badge.png";
import lifeLong from "../assets/img/badges/lifelong-learning.png";
import { Link } from "react-scroll";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <img
              src={languages}
              className="d-block mx-lg-auto img-fluid pulse"
              alt="Languages"
              width="700"
              height="auto"
              loading="lazy"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-4 fw-normal lh-1 mb-3">
              José Manuel Doñe Guillén
            </h1>
            <h4 className="text-primary">Full-stack developer</h4>

            <p className="lead">{t("about.description")}</p>

            <div className="row mb-4 g4">
              <div className="col-auto">
                <img
                  src={scrum}
                  width="120"
                  height="auto"
                  alt="Scrum badge"
                  loading="lazy"
                />
              </div>
              <div className="col-auto">
                <img
                  src={remoteWork}
                  width="120"
                  height="auto"
                  alt="Remote Work badge"
                  loading="lazy"
                />
              </div>
              <div className="col-auto">
                <img
                  src={lifeLong}
                  width="120"
                  height="auto"
                  alt="Life long learner"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary text-white shadow btn-lg px-4 me-md-2"
              >
                {t("about.download")}
              </button>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-86}
                duration={500}
                className="btn btn-outline-secondary btn-lg px-4"
              >
                {t("about.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
