import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/landingpage';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Contact from './components/contactUs';
import Aboutus from './components/about';
import Community from './components/community';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props=><LandingPage {...props} />} />
        <Route exact path='/portfolio' render={props=><Portfolio {...props} />} />
        <Route exact path='/services' render={props=><Services {...props} />} />
        <Route exact path='/contact' render={props=><Contact {...props} />} />
        <Route exact path='/about' render={props=><Aboutus {...props} />} />
        <Route exact path='/community' render={props=><Community {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
