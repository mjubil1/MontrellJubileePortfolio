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
/**
 * Site Router
*/
const Router = () => {
  return (
    <Switch>
      {/* HOME PAGE */}
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/thankyou" component={ThankYou}/>
      <Route exact path="/admin" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Router;