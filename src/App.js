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
import Creations from "./creations";
import { useState } from 'react';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css/animate.compat.css'

function App() {
  if (localStorage.getItem("theme") !== "light" && localStorage.getItem("theme") !== "dark"){
    localStorage.setItem("theme", 'dark');
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  function toggle() {
    if (theme==="dark") {
      setTheme("light");
      localStorage.setItem("theme", 'light');
    }
    else {
        setTheme('dark');
        localStorage.setItem("theme", 'dark');
    }
  }

  React.useEffect(() => {
    store.addNotification({
      title: "Success",
      message: "Welcome to My Website!",
      type: "success",
      insert: "top",
      isMobile: true,
      container: "bottom-right",
      animationIn: ["animated", "flipInX"],
      animationOut: ["animated", "flipOutX"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true
      },
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <ReactNotification />
        <NavbarComponent theme = {theme} toggle = {toggle}/>
          <br/><br/><br/><br/>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/school" component = {School} />
            <Route exact path = "/competitions-achievements" component = {CompetitionsAchievements} />
            <Route exact path = "/homework-manager" component = {HomeworkManager} />
            <Route exact path = "/creations" component = {() => (<Creations theme = {theme} />)} />
            <Route exact path = "/about" component = {About} />
            <Route component={NotFound} />
          </Switch>

        <Footer theme = {theme}/>
      </div>
    </Router>
  );
}

export default App;
