import { useTranslation } from "react-i18next";
import react from "../assets/img/certifications/react.png";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="mt-5 py-5">
      <div className="container">
        <h1 className="display-4 text-center mb-4 fw-normal">Portfolio</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={react} className="card-img-top" alt="Ract" />
              <div className="card-body h-100">
                <h5 className="card-title">
                  Desarrollador de JavaScript React
                </h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={react} className="card-img-top" alt="Ract" />
              <div className="card-body h-100">
                <h5 className="card-title">
                  Desarrollador de JavaScript React
                </h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">2023</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={react} className="card-img-top" alt="Ract" />
              <div className="card-body h-100">
                <h5 className="card-title">
                  Desarrollador de JavaScript React
                </h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">2023</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
