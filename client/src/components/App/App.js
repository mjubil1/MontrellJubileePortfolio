import React, { Component } from "react";
import { BrowserRouter  } from "react-router-dom";
import Router from "../Router/Router";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-content">
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;