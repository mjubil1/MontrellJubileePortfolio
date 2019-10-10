import React from "react";
import { Route, Switch } from "react-router-dom";
import RealEstate from "../../pages/RealEstate";
import ThankYou from "../../pages/ThankYou";
import Home from "../../pages/Home";
import NavigationBar from "../NavigationBar/NavigationBar"
import Login from "../auth/Login";
import PrivateRoute from "../private-route/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
/**
 * Site Router
 */
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={NavigationBar}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/thankyou" component={ThankYou}/>
      <Route exact path="/admin" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={RealEstate} />
    </Switch>
  )
}

  export default Router;
