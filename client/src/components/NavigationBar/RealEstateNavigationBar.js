import React, { Component } from "react";

class RealEstateNavigationBar extends Component {
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
               <div className="menu" style={{ backgroundColor: "blue" }}>
                  <ul>
                    <li><a href="#education">PROPERTY SEARCH</a></li>
                    <li><a href="#experience">MY RECENT LISTINGS</a></li>
                    <li><a href="#about">ABOUT ME </a></li>
                    <li><a href="#contact">CONTACT ME</a></li>
                  </ul>
               </div>
            </nav>
         </header>
    );
  }
}

export default RealEstateNavigationBar;