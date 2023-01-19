import { useTranslation } from "react-i18next";
import barriles from "../assets/img/projects/3barrilesrd.jpg";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mt-5 py-5">
      <div className="container">
        <h1 className="display-4 text-center mb-4 fw-normal">{t('projects.title')}</h1>

        <ul className="nav nav-pills mb-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Front-end
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Back-end
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Movil
            </a>
          </li>
        </ul>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={barriles} className="card-img-top" alt="3Barriles" />
              <div className="card-body h-100">
                <h5 className="card-title">3Barriles</h5>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse in porta lectus, eget facilisis eros. Nullam
                  tincidunt ante vitae cursus feugiat. Quisque semper interdum
                  consectetur. Donec ac dignissim leo.
                </p>
                <span className="badge bg-primary rounded-pill">Front-end</span>
              </div>
              <div className="card-footer">
                <small className="text-muted">2021</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={barriles} className="card-img-top" alt="3Barriles" />
              <div className="card-body h-100">
                <h5 className="card-title">3Barriles</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse in porta lectus, eget facilisis eros. Nullam
                  tincidunt ante vitae cursus feugiat. Quisque semper interdum
                  consectetur. Donec ac dignissim leo.
                </p>
                <span className="badge bg-primary rounded-pill">Front-end</span>
              </div>
              <div className="card-footer">
                <small className="text-muted">2021</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow h-100 border-white">
              <img src={barriles} className="card-img-top" alt="3Barriles" />
              <div className="card-body h-100">
                <h5 className="card-title">3Barriles</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse in porta lectus, eget facilisis eros. Nullam
                  tincidunt ante vitae cursus feugiat. Quisque semper interdum
                  consectetur. Donec ac dignissim leo.
                </p>
                <span className="badge bg-primary rounded-pill">Front-end</span>
              </div>
              <div className="card-footer">
                <small className="text-muted">2021</small>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="d-md-flex justify-content-between align-items-center">
              <p className="mb-0">
                <b>{t("certifications.results.showing")}:</b> 3{" "}
                {t("certifications.results.of")} 49{" "}
                {t("certifications.results.results")}
              </p>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="/">
                      {t("certifications.pagination.previous")}
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      {t("certifications.pagination.next")}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
