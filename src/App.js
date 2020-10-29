import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from "./config";
import CustomLoginComponent from "./Login";
import Navbar from "./NavBar";
import Profile from "./Profile";
import Home from "./Home";
import StatusPage from "./front-yard/status-page";

const HasAccessToRouter = () => {
  const history = useHistory(); // example from react-router

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push("/login");
  };

  return (
    <Security {...config} onAuthRequired={customAuthHandler}>
      <Navbar />

      <div>
        <div style={{width: '100%', height: '340px', background: '#ffffff00', padding: '2vw'}}>
          <div style={{paddingBottom: '44px', paddingTop: '44px', fontSize: '28px'}}>
            Build NextGen Mobility Apps.
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '150px', height: '42px', background: '#1A7A94', borderRadius: '21px', color: 'white', textAlign: 'center', lineHeight: '42px', fontWeight: 500}}>Join the waitlist</div>
            <div style={{width: '150px', height: '42px', background: '#eef4f9', borderRadius: '21px', marginLeft: '22px'}} />
          </div>
        </div>
        <div style={{width: '100%', height: '340px', background: '#51AFC9'}} />
        <div style={{padding: '22px'}}><div style={{width: '220px', height: '190px', background: '#EEF4F9', borderRadius: '6px', paddingTop: '28px'}}>
            <svg width={80} height={50} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '160px', height: '80px', display: 'block', margin: '0 auto'}}>
              <rect x="0.5" y="26.5" width={45} height={23} rx="1.5" stroke="#025B81" />
              <rect x="0.5" y="0.5" width={16} height={16} rx="4.5" stroke="#025B81" />
              <rect x="19.5" y="0.5" width={16} height={6} rx={3} fill="#025B81" stroke="#025B81" />
              <rect x={20} y={1} width={5} height={5} rx="2.5" fill="white" />
              <rect x="53.25" y="2.25" width="24.5" height="4.5" rx="0.75" stroke="#025B81" strokeWidth="0.5" />
              <mask id="path-6-inside-1" fill="white">
                <rect x={54} y={3} width={12} height={3} rx="0.5" />
              </mask>
              <rect x={54} y={3} width={12} height={3} rx="0.5" fill="#025B81" stroke="#025B81" strokeWidth={2} mask="url(#path-6-inside-1)" />
              <rect x="51.5" y="0.5" width={28} height={49} rx="1.5" stroke="#025B81" />
            </svg>
            <div style={{textAlign: 'center', paddingTop: '26px', fontSize: '20px', color: '#1B4862', fontWeight: 500}}> Design System </div>
          </div></div>
      </div>
      <Route path="/status" exact component={StatusPage} />

      <Route path="/" exact component={Home} />
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
