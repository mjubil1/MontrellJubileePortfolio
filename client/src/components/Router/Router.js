  import React from "react";
import { Route, Switch } from "react-router-dom";
// Pages
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Dashboard from "../dashboard/Dashboard";
import ThankYou from "../../pages/ThankYou/ThankYou";
import PrivateRoute from "../private-route/PrivateRoute";
// Components
import Login from "../auth/Login";
import Register from "../auth/Register";
import About from "../../pages/Agent/About";
import Contact from "../../pages/Agent/Contact";
import PropertySearch from "../../pages/Agent/PropertySearch";
import RecentListings from "../../pages/Agent/RealEstateAgent";
import RealEstateAgent from "../../pages/Agent/RealEstateAgent";
/**
 * Site Router
*/
const Router = () => {
  return (
    <Switch>
      {/* HOME PAGE */}
      <Route exact path="/" component={Home} />

      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/real-estate" component={RealEstateAgent} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/thank-you" component={ThankYou}/>
      <Route exact path="/real-estate/about" component={About} />
      <Route exact path="/real-estate/contact" component={Contact} />
      <Route exact path="/real-estate/property-search" component={PropertySearch} />
      <Route exact path="/real-estate/recent-listings" component={RecentListings} />
      <Route exact path="/admin" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Router;