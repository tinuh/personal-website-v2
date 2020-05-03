import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavbarComponent from "./navbar";
import Home from "./home";
import Footer from "./footer";
import HomeworkManager from "./homework-manager";
import About from "./about";
import School from "./school";
import NotFound from "./404";
import CompetitionsAchievements from "./competitions-achievements";


function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComponent />

      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/school" component = {School} />
        <Route exact path = "/competitions-achievements" component = {CompetitionsAchievements} />
        <Route exact path = "/homework-manager" component = {HomeworkManager} />
        <Route exact path = "/about" component = {About} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
