

import React from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import PageIntro from "../../components/PageIntro/pageIntro";

import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import TechSkills from "../../components/TechSkills/techskills";
import ContactMe from '../../components/ContactForm/ContactForm';
import Footer from "../../components/Footer/Footer";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
        isMounted: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    //this.state.isMounted = false;
    this.setState({
      isMounted: false,
   });

  }

  componentWillUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
      <PageIntro></PageIntro>
      <AboutMe></AboutMe>
      <Education></Education>
      <Experience></Experience>
      <TechSkills></TechSkills>
      {/* <Projects></Projects>   */}
      <ContactMe></ContactMe>
      <div></div>
      <div className="backToTop" style={{opacity: 0.85}}>

          <a href="#intro"><i className="fa fa-arrow-up"> </i></a>




      </div>

      <Footer></Footer>
      </div>

    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default Home;
