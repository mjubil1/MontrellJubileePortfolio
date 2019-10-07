import React, { Component } from "react";
import "./home.css";
import LandingButtons from "../../components/Landing/LandingButtons";
class Home extends Component {
  render() {
    return (
      <div className="landing-content">
        <LandingButtons  />
      </div>
    );
  }
}
export default Home;