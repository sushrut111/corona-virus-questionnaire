import React from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';

function Landing(props) {
  const { handleTransition } = props;

  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical clickable">
              <article
                className="tile is-child notification is-warning"
                onClick={handleTransition}
              >
                <p className="title">Confused if you should see a doctor?</p>
                <p className="subtitle">Take the quiz to know. (Click me!)</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">About</p>
              <div className="content">
                The GoCorona App is developed for public interest in the context
                of novel coronavirus COVID-19. This application is inspired by
                multiple online resources and similar questionnaires. One such
                app is
                {' '}
                <b>CovApp</b>
                (link given in Important Links) We have been
                working towards making those resources available in regional
                languages. The app includes a questionnaire focusing on
                potential exposure, symptoms and medical history of the patient.
                Based on the answers of these questions, recommendations would
                be displayed. Along with that, the pdf version of the
                questionnaire would be generated which can further be downloaded
                and sent to a doctor to get their opinion. This application aims
                to support the healthcare system and optimize patient flow into
                the testing sites, ambulances and clinics. We want to help you
                assess your medical condition, provide recommendations and
                summarize relevant medical information for doctor’s
                consultation. Please note that this app is not intended for any
                diagnostic purpose. If in doubt, please get in touch with a
                healthcare provider.
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Contributors</p>
              <div className="content">
                <ul>
                  <li>Simran Asawa</li>
                  <li>Sushrut Kasture</li>
                  <li>Harini Lakshminarayanan</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification ">
            <div className="content">
              <p className="title">Important links</p>
              <p className="subtitle">
                For more information regarding COVID-19
              </p>

              <div className="content links">
                <ul>
                  <li>
                    <a
                      className="content-links"
                      href="https://icmr.nic.in/node/39071"
                    >
                      Indian Council of Medical Research
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://www.mohfw.gov.in/"
                    >
                      Ministry of health
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://www.mygov.in/covid-19"
                    >
                      Govt. of India - COVID-19
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://www.mohfw.gov.in/pdf/FAQ.pdf"
                    >
                      COVID-19 FAQs
                    </a>
                  </li>
                  <li>
                    <a className="content-links" href="https://covidout.in/">
                      COVID-19 India statistics
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                    >
                      WHO - Novel coronavirus
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
                    >
                      WHO - Novel coronavirus Q&A
                    </a>
                  </li>
                  <li>
                    <a
                      className="content-links"
                      href="https://covapp.charite.de/"
                    >
                      CovApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Landing;
