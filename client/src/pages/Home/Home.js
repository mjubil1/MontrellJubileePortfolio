import React, { Component } from "react";
import "./home.css";
import LandingButtons from "../../components/Landing/LandingButtons";
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h4 style={{ textAlign: "center" }}>Welcome To My Page</h4>
        </div>
        <div className="landing-content">
          <LandingButtons  />
        </div>
      </div>
    );
  }
}
export default Home;
