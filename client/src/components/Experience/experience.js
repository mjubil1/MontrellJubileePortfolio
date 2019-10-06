import React /*, { Component }*/ from "react";
import cybraryLogo from '../../images/cybrary3.png'
import studiocodeworksLogo from '../../images/studiocodeworksLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Experience extends React.Component {

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1}>
      <section className="page-section" id="experience">

      <div className="container mb-5 mt-5">


      <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="secondary-section-header pb-4 text-center">
                Internship Experience
            </h1>
          </div>
        </div>


        <div className="row" id="workInfo">
          <div id="company1" className="col-12 col-md-8">
            <a href="https://www.cybrary.it"><h2>Cybrary</h2></a>
            <p>
              <i>
                Cybrary is an IT/Cybersecurity training and career development platform
                supporting over 2 million users
                worldwide
              </i>
            </p>

            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;February 2018 - Present</li>
              <li className="list-inline-item text-right"> <FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;College Park, MD</li>


            </ul>

            <ul>
              <li>
              Developed unit test using react-testing-library to test that components rendered on the screen properly and correct data was being displayed.
              </li>
              <li>
                Integrated custom restAPIs from backend and displayed information onto frontend of application
              </li>
              <li>
                Worked with Postman to make sure API routes functioned and worked properly.
              </li>
            </ul>

          </div>
          <div className="col-12 col-md-4">
            <img alt="Cybrary Logo" src={cybraryLogo} height="250px" width="250px"></img>
          </div>
        </div>

        <div className="row" id="workInfo">
          <div id="company2" className="col-12 col-md-8">
            <a href="http://www.studiocodeworks.com"><h2>StudioCodeWorks Inc</h2></a>
            <p>
              <i>
                StudioCodeWorks is a software development company who help
                clients build their dream software product in a thoughtful and efficient manner
              </i>
            </p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item text-left"><FontAwesomeIcon icon={faCalendarAlt} color="#000000"/>&nbsp;&nbsp;February 2018 - September 2018</li>
              <li className="list-inline-item text-right"><FontAwesomeIcon icon={faMapMarkerAlt} color="#000000"/>&nbsp;&nbsp;Upper Marlboro, MD</li>
            </ul>

            <ul>
              <li>
                  Most of internship consisted of individual research using online
                  resources such as Udemy and Codecademy learning NodeJS, Angular and
                  hybrid mobile app development practices
              </li>
              <li>
                  Conducted research on competitors for upper management which resulted in
                  more informative marketing decisions
              </li>
              <li>
                Developed both backend and frontend purely PHP and Html/css for a HVAC client and
                configured and managed a large database consisting of thousands of employees with PhpMyAdmin
              </li>
              <li>
                  Consulted with Software Development team to aid in uncovering any bugs on
                  the company’s website
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <img alt="ETS Logo" src={studiocodeworksLogo} height="250px" width="250px"></img>
          </div>
        </div>
      </div>
      </section>
      </ScrollAnimation>

    );
  }
}
/*




*/