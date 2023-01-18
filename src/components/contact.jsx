import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mt-5 py-5 bg-primary">
      <div className="container">
      <div className="container col-md-6">
        <div className="card shadow p-5">

        <h1 className="display-4 text-center mb-4 fw-normal">
          Contact
        </h1>

            <form id="contactForm">
              <div className="mb-3">
                <label className="form-label" for="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" for="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" for="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>

              
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
            </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
