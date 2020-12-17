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
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Particles from 'react-particles-js';

function App() {
  if (localStorage.getItem("theme") !== "light" && localStorage.getItem("theme") !== "dark"){
    localStorage.setItem("theme", 'dark');
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  function toggle() {
    if (theme==="dark") {
      setTheme("light");
      localStorage.setItem("theme", 'light');
      document.body.style.background = "#ffffff";
    }
    else {
        setTheme('dark');
        localStorage.setItem("theme", 'dark');
        document.body.style.background = "#222";
    }
  }

  React.useEffect(() => {
    store.addNotification({
      title: "Success",
      message: "Welcome to My Website!",
      type: "success",
      insert: "bottom",
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
    if (theme === "dark"){
      document.body.style.background = "#222";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Particles Params
  const params = {
    polygon: {
        enable: true,
    },
    "particles": {
      "number": {
          "value": 50
      },
      "color":{
        "value": theme === "dark" ? "#ffffff" : "#000000"
      },
      "size": {
          "value": 5
      },
      "line_linked":{
        "color": {
          "value": theme === "dark" ? "#ffffff" : "#000000"
        }
      },
    },
    "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          }
      }
  }
  }

  //Particles Style
  const styles = {
    particles: {
      fontFamily: "sans-serif",
      textAlign: "center",
      height: "100%",
      background: theme === "dark" ? "#222" : "#ffffff",
      justifyContent: "center",
      alignItems: "center",
    },
    root : {
      color: theme === "dark" ? "#ffffff" : "#000000",
      background: theme === "dark" ? "#222" : "#ffffff"
    }
  };

  return (
    <Router>
       <div className="App" style = {styles.root}>
          <ReactNotification />
          <div style = {styles.particles}>
            <Particles params = {params}/>
          </div>
          
          <NavbarComponent theme = {theme} toggle = {toggle}/>

          <div className = "actual-content">
            <Route render={({ location }) => (
              
              
              <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={300} classNames = 'fade' >
                  
                  <Switch location={location}>
                    <Route exact path = "/" render = {() => <Home theme = {theme}/>} />
                    <Route exact path = "/school" render = {() => <School theme = {theme}/>} />
                    <Route exact path = "/competitions-achievements" render = {() => <CompetitionsAchievements theme = {theme}/>} />
                    <Route exact path = "/homework-manager" render = {() => <HomeworkManager theme = {theme} />} />
                    <Route exact path = "/creations" render = {() => <Creations theme = {theme} />} />
                    <Route exact path = "/about" render = {() => <About theme = {theme}/>} />
                    <Route render={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>

        <Footer theme = {theme}/>
      </div>
    </Router>
  );
}

export default App;
