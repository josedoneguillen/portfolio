import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mt-5 py-5 bg-primary">
      <div className="container py-5">
      <div className="container col-md-6">
        <div className="card shadow p-5">

        <h1 className="display-4 text-center mb-4 fw-normal">
          {t('contact.title')}
        </h1>

            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  {t('contact.form.name')}
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder={t('contact.form.name')}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="emailAddress">
                {t('contact.form.emailAddress')}
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder={t('contact.form.emailAddress')}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                {t('contact.form.message')}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>

              
                <button className="btn btn-outline-primary" type="submit">
                {t('contact.form.send')}
                </button>
            </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
