import React from 'react';
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import NavbarComponent from "./navbar";
import Home from "./home";
import Footer from "./footer";
import HomeworkManager from "./homework-manager";
import About from "./about";
import School from "./school";

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComponent />

      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/school" component = {School} />
        <Route exact path = "/homework-manager" component = {HomeworkManager} />
        <Route exact path = "/about" component = {About} />
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
