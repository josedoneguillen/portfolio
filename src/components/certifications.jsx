import { useTranslation } from "react-i18next";
import react from "../assets/img/certifications/react.png";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="mt-5 py-5">
      <div className="container">
        <h1 className="display-4 text-center mb-4 fw-normal">
          {t("certifications.title")}
        </h1>

        <div className="row g-4">
          <div className="col-md-2">
            <form>
              <fieldset>
                <div className="mb-4">
                  <input
                    type="text"
                    id="search"
                    name="search"
                    className="form-control"
                    placeholder={t('certifications.form.search')}
                  />
                </div>
                <div className="mb-2">
                  <label for="institution" className="form-label">
                  {t('certifications.form.institution')}
                  </label>
                  <select
                    id="institution"
                    name="institution"
                    className="form-select"
                  >
                    <option>Select</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label for="area" className="form-label">
                  {t('certifications.form.area')}
                  </label>
                  <select id="area" name="area" className="form-select">
                    <option>Select</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label for="dateFrom" className="form-label">
                  {t('certifications.form.dateFrom')}
                  </label>
                  <input
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label for="dateTo" className="form-label">
                  {t('certifications.form.dateTo')}
                  </label>
                  <input
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    className="form-control"
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-md-10">
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

              <div className="col-md-12">
                <div className="d-md-flex justify-content-between align-items-center">
                  <p className="mb-0">
                    <b>{t('certifications.results.showing')}:</b> 3 {t('certifications.results.of')} 49 {t('certifications.results.results')}
                  </p>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0">
                      <li className="page-item">
                        <a className="page-link" href="/">
                        {t('certifications.pagination.previous')}
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
                          {t('certifications.pagination.next')}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
