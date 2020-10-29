import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from "./config";
import CustomLoginComponent from "./Login";
import Navbar from "./NavBar";
import Profile from "./Profile";
//import Home from "./Home";
import StatusPage from "./front-yard/status-page";
import LandingPage from "./front-yard/landing-page";

const HasAccessToRouter = () => {
  const history = useHistory(); // example from react-router

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };

  return (
    <Security {...config} onAuthRequired={customAuthHandler}>
      <Navbar />

 
      <Route path="/status" exact component={StatusPage} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/implicit/callback" component={LoginCallback} />
      <Route path="/login" exact component={CustomLoginComponent} />
      <SecureRoute path="/profile" component={Profile} />


    </Security>
  );
};



const App = () => (
  <div>
    <Router>
      <HasAccessToRouter />
    </Router>
  </div>
);

export default App;
