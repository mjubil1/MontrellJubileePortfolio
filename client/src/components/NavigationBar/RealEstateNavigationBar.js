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
                    <li><a href="/real-estate/property-search">PROPERTY SEARCH</a></li>
                    <li><a href="/real-estate/recent-listings">MY RECENT LISTINGS</a></li>
                    <li><a href="/real-estate/about">ABOUT ME </a></li>
                    <li><a href="/real-estate/contact">CONTACT ME</a></li>
                  </ul>
               </div>
            </nav>
         </header>
    );
  } 
}

export default RealEstateNavigationBar;