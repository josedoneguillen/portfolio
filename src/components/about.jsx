import { useTranslation } from "react-i18next";
import languages from "../assets/img/layout/languages.png";
const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-4">
            <img
              src={languages}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              José Manuel Doñe Guillén
            </h1>
            <h4 className="text-primary">Full-stack developer</h4>
            <p className="lead">{t("about.description")}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary text-white shadow btn-lg px-4 me-md-2"
              >
                {t("about.download")}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                {t("about.contact")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
