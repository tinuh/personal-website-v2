import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css/animate.compat.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Particles from "./components/particles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ChakraProvider } from "@chakra-ui/react";
import './style/style.css';

//Component Imports
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./components/contact";

//Page imports
import Home from "./pages/home";
import HomeworkManager from "./pages/homework-manager";
import DigitalFit from "./pages/digital-fit";
import About from "./pages/about";
import School from "./pages/school";
import NotFound from "./pages/404";
import CompetitionsAchievements from "./pages/competitions-achievements";
import Creations from "./pages/creations";

function App() {
  if (localStorage.getItem("theme") !== "light" && localStorage.getItem("theme") !== "dark"){
    localStorage.setItem("theme", 'dark');
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [contact, setContact] = useState(false);

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
  }, []);

  //Particles Style
  const styles = {
    particles: {
      fontFamily: "sans-serif",
      background: theme === "dark" ? "#222" : "#ffffff",
    },
    root : {
      color: theme === "dark" ? "#ffffff" : "#000000",
      background: theme === "dark" ? "#222" : "#ffffff"
    },
    input: {
      color: "#ffffff",
      width: "100%"
    }
  };

  //MUI Theme
  const mui_theme = createMuiTheme({
    palette: {
      type: theme,
      primary: {
        main: "#17a2b8"
      }
    }
  });

  return (
    <Router>
      <ThemeProvider theme = {mui_theme}>
        <ChakraProvider resetCSS = {false}>
        <div className="App" style = {styles.root}>
            {/* Notification */}
            <ReactNotification />

            {/* Particles for the Background*/}
            <div className = "particles-js" style = {styles.particles}>
              <Particles theme = {theme} />
            </div>
            
            {/* Navbar Component */}
            <NavbarComponent theme = {theme} contact = {setContact} toggle = {toggle}/>
            
            {/* Contact Modal */}
            <Contact contact = {contact} setContact = {setContact} theme = {theme} styles = {styles} />
            


            {/* react-router main content */}
            <div className = "actual-content">
              <Route render={({ location }) => (
                
                
                <TransitionGroup>
                  <CSSTransition key={location.pathname} timeout={300} classNames = 'fade' >
                    
                    <Switch location={location}>
                      <Route exact path = "/" render = {() => <Home theme = {theme}/>} />
                      <Route exact path = "/school" render = {() => <School theme = {theme}/>} />
                      <Route exact path = "/competitions-achievements" render = {() => <CompetitionsAchievements theme = {theme}/>} />
                      <Route exact path = "/homework-manager" render = {() => <HomeworkManager theme = {theme} />} />
                      <Route exact path = "/digital-fit" render = {() => <DigitalFit theme = {theme} />} />
                      <Route exact path = "/creations" render = {() => <Creations theme = {theme} />} />
                      <Route exact path = "/about" render = {() => <About/>} />
                      <Route render={() => <NotFound theme = {theme}/>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </div>

            {/* Footer Component */}
            <Footer theme = {theme}/>
          </div>
      
      </ChakraProvider>
     </ThemeProvider>
    </Router>
  );
}

export default App;
