import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="pt-0 py-5">
      <div className="container">
        <h1 className="display-4 text-center mb-4 fw-normal">{t('skills.title')}</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div className="col">
            <div className="card h-100 rounded-3 shadow border-white">
              <div className="card-header text-white py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Front-End</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">Angular</li>
                  <li className="list-group-item">ReactJS</li>
                  <li className="list-group-item">HTML</li>
                  <li className="list-group-item">CSS</li>
                  <li className="list-group-item">SASS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 rounded-3 shadow border-white">
              <div className="card-header text-white py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Back-End</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">NodeJS</li>
                  <li className="list-group-item">Express</li>
                  <li className="list-group-item">SQL | PL/SQL | NoSQL</li>
                  <li className="list-group-item">C# .Net Core</li>
                  <li className="list-group-item">PHP</li>
                  <li className="list-group-item">Python</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 rounded-3 shadow border-white">
              <div className="card-header text-white py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">DevOps</h4>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">GitLab</li>
                  <li className="list-group-item">Azure DevOps</li>
                  <li className="list-group-item">Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
