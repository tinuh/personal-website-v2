import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "./navbar";
import Home from "./home";
import Footer from "./footer";
import HomeworkManager from "./homework-manager";
import DigitalFit from "./digital-fit";
import About from "./about";
import School from "./school";
import Skills from "./skills";
import NotFound from "./404";
import CompetitionsAchievements from "./competitions-achievements";
import Creations from "./creations";
import { useState } from 'react';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css/animate.compat.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
//import Particles from 'react-particles-js';
import Particles from "./particles";
import {Modal, Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import axios from 'axios';
import { Formik } from 'formik';

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

  //Contact Form Submit
  async function handleSubmit(values) {
    const data = values;
    /* const headers = {
      'Access-Control-Allow-Origin': "*"
    } */
    await fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then(
        res => res.text()
      )
      .then(
        ip => {
          let start = ip.indexOf('ip=')+3;
          let end = start+ip.slice(start).indexOf('\n');
          data.ip = ip.slice(start, end).trim();
        }
      )

    console.log(data)

    await axios.post('https://send.pageclip.co/iBMnJYTO8tl34tNZqdwFebauCzAONJoF/contact', data)
      .then(function (response) {
        console.log(response)
        setContact(false);
        console.log('sub');
        
        store.addNotification({
          title: "Success",
          message: "Contact Form Submitted.",
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
      })
      .catch(function (error) {
        console.log(error)
        setContact(false);
        console.log('fail');
        
        store.addNotification({
          title: "Success",
          message: "Contact Form Submitted",
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

        /* store.addNotification({
          title: "API Error",
          message: "Form not submitted",
          type: "danger",
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
        }); */
      })
    
  }

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
          <Modal
            show = {contact}
            onHide = {() => setContact(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <div style = {theme === "dark" ? {backgroundColor: "#222"} : {backgroundColor: "#ffffff"}}>
              <Formik 
                initialValues={{name: '', email: '', message: ''}}
                onSubmit = {(values, {setSubmitting}) => {
                  handleSubmit(values);
                }}
              >
                {({values, errors, tocuhed, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                  <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter" style = {theme === "dark" ? {color: "#ffffff"} : {color: "#222"}}>
                        Contact
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div class = "row">
                        <div class = "col-md-6">
                          <TextField onChange = {handleChange} value = {values.name} onBlur = {handleBlur} label = "Full Name" name = "name" type = "text" variant = "outlined" style = {styles.input} required/>
                        </div><br/><br/><br/>
                        <div class = "col-md-6">
                          <TextField onChange = {handleChange} value = {values.email} onBlur = {handleBlur} label = "Email" name = "email" type = "email" variant = "outlined" style = {styles.input} required/>
                        </div><br/><br/><br/>
                        <div class = "col-md-12">
                          <TextField onChange = {handleChange} value = {values.message} onBlur = {handleBlur} multiline rowsMax={6} rows= {4} label = "Message" name = "message" type = "text" variant = "outlined" style = {styles.input} required/>
                        </div>
                      </div>
                      
                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant = "outline-success" disabled={isSubmitting}>Submit</Button>
                      <Button type = "button" onClick={() => setContact(false)} variant = "outline-danger">Cancel</Button>
                    </Modal.Footer>
                  </form>)}
              </Formik>
            </div>
          </Modal>


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
                    <Route exact path = "/skills" render = {() => <Skills theme = {theme} />} />
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
     </ThemeProvider>
    </Router>
  );
}

export default App;
