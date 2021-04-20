import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css/animate.compat.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Particles from "./components/particles";
import { useColorModeValue } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

//Component Imports
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./components/contact";

//Page imports
import Home from "./pages/home";
import Article from "./pages/article";
import About from "./pages/about";
import School from "./pages/school";
import NotFound from "./pages/404";
import CompetitionsAchievements from "./pages/competitions-achievements";
import Creations from "./pages/creations";
import Skills from "./pages/skills";

function App() {
  const theme = useColorModeValue("light", "dark");
  const [contact, setContact] = useState<boolean>(false);

  React.useEffect(() => {
    store.addNotification({
      title: "Success",
      message: "Welcome to My Website!",
      type: "success",
      insert: "bottom",
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

  return (
    <Router>
      <div className="App" style = {styles.root}>
        {/* Notification */}
        <ReactNotification />

        {/* Particles for the Background*/}
        <div className = "particles-js" style = {styles.particles}>
          <Particles theme = {theme} />
        </div>
        
        {/* Navbar Component */}
        <NavbarComponent contact = {setContact}/>
        
        {/* Contact Modal */}
        <Contact contact = {contact} setContact = {setContact} theme = {theme} styles = {styles} />

        {/* react-router main content */}
        <div className = "actual-content">
          <Route render={({ location }) => (
            
            
            <TransitionGroup>
              <CSSTransition key={location.pathname} timeout={300} classNames = 'fade' >
                
                <Switch location={location}>
                  <Route exact path = "/" component = {Home} />
                  <Route exact path = "/school" component = {School} />
                  <Route exact path = "/competitions-achievements" component = {CompetitionsAchievements}/>
                  <Route exact path = "/articles/:name" component = {Article}/>
                  <Route exact path = "/skills" component = {Skills} />
                  <Route exact path = "/creations" component = {Creations} />
                  <Route exact path = "/about" component = {About} />
                  <Route component = {NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>

        {/* Footer Component */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;