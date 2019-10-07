import React, { Component } from "react";
class PortfolioNavigationBar extends Component {
  render() {
    return (
         <header>
            <nav >
               <div className="menu-icon">
                  <i className="fa fa-bars fa-2x"></i>
               </div>
               <div className="logo">
                  Montrell Jubilee
               </div>
               <div className="menu">
                  <ul>
                    <li><a   href="#about"> About Me </a></li>
                    <li><a   href="#education"> Education </a></li>
                    <li><a   href="#experience"> Experience</a></li>
                    <li><a   href="#technical"> Skills</a></li>
                    <li><a   href="#contact"> Contact Me</a></li>
                  </ul>
               </div>
            </nav>
         </header>
      );
   }
}

export default PortfolioNavigationBar;