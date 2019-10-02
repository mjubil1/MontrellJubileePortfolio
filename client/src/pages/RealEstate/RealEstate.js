

import React /*, { Component }*/ from "react";
import PageIntro from "../../components/PageIntro/pageIntro";

import AboutMe from "../../components/AboutMe/aboutMe";
import Education from "../../components/Education/education";
import Experience from "../../components/Experience/experience";
import TechSkills from "../../components/TechSkills/techskills";
import ContactMe from '../../components/ContactForm/ContactForm';
import Footer from "../../components/footer/footer";

class RealEstate extends React.Component {
  constructor() {
    super();
    this.state = {
        isMounted: false
    };
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

  render() {
    return (
      <div>
        <h2>hhkkhk</h2>
      </div>

    );
  }
}

export default RealEstate;