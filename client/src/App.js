import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter, Router,Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import ThankYou from "./pages/ThankYou/ThankYou";
//import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import RealEstate from "./pages/RealEstate/RealEstate";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./admin";
  }
}

class App extends Component {
  getChoice = (choice) => {
    if(choice === 1) {
      return(
        <div>
          <Route exact path="/" component={NavigationBar}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/thankyou" component={ThankYou}/>
          <Route exact path="/admin" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      )
    } else {
        return(
          <div>
            <Route exact path="/" component={RealEstate} />
          </div>
        )
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <button onClick={this.getChoice(1)}>Software Portfolio</button>
            <button onClick={this.getChoice(2)}>Real Estate</button>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

