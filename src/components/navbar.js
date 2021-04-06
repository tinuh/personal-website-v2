import React from 'react';
import {Nav as BNav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from "react-router-bootstrap";
import { useState } from 'react';
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import dark from '.././assets/dark.png';
import light from '.././assets/light.png';
import {useColorMode} from '@chakra-ui/react';

function NavbarComponent(props) {
  const [expanded, setExpanded] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="Navbar">
      <Navbar expanded={expanded} fixed = "top" bg={props.theme} expand="lg" className = {props.theme === "dark" ? "navbar-light portfolio-navbar" : "navbar-dark portfolio-navbar"} style={{background: 'linear-gradient(90deg, var(--light), 0%, var(--cyan) 0%, var(--danger) 100%), var(--blue)'}}>
        <LinkContainer exact to = "/">
            <Navbar.Brand>Tinu Vanapamula</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <BNav className="ml-auto navbar nav">
                <LinkContainer exact to="/" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">Home</NavLink></LinkContainer>
                <LinkContainer exact to="/school" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">School</NavLink></LinkContainer>
                <LinkContainer exact to="/competitions-achievements" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">Achievements</NavLink></LinkContainer>
                {/* <LinkContainer exact to="/skills" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">Skills</NavLink></LinkContainer> */}
                <LinkContainer exact to="/creations" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">Creations</NavLink></LinkContainer>
                <LinkContainer exact to="/about" onClick={() => setExpanded(false)}><NavLink className = "navbar-item">About</NavLink></LinkContainer>
                <LinkContainer exact to="#" onClick={() => {setExpanded(false); props.contact(true);}}><NavLink className = "navbar-item">Contact</NavLink></LinkContainer>
                <p style = {{height: '2px'}}>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <LinkContainer to="#">
                  {colorMode === "dark" ?
                    <Toggle
                            onChange={toggleColorMode}
                            checked={true}
                            icons={{checked: <img alt = "dark" className='themeicon' src={dark} />, unchecked: <img alt = "light" className='themeicon' src={light} />}}
                    />
                    :
                    <Toggle
                            onChange={toggleColorMode}
                            checked={false}
                            icons={{checked: <img alt = "dark"  className='themeicon' src={dark} />, unchecked: <img alt = "light" className='themeicon' src={light} />}}
                    />
                  }
                </LinkContainer>


            </BNav>
            </Navbar.Collapse>
        </Navbar>

        {/* <nav className="navbar navbar-light navbar-expand-lg fixed-top portfolio-navbar gradient" style={{background: 'linear-gradient(90deg, var(--light), 0%, var(--cyan) 0%, var(--danger) 100%), var(--blue)'}}>
                <div className="container-fluid"><a className="navbar-brand logo" href="/index.html">Tinu Vanapamula</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav-1">
                        <ul class="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link active" data-bs-hover-animate="tada" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-hover-animate="tada" href="/school" style={{color: 'rgba(0,0,0,0.9)'}}>School</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-hover-animate="tada" href="/competitions-achievements" style={{color: 'rgba(0,0,0,0.9)'}}>Achievements</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-hover-animate="tada" href="hire-me.html" style={{color: 'rgba(0,0,0,0.9)'}}>Creations</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><a className="nav-link active" data-bs-hover-animate="tada" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link active" data-bs-hover-animate="tada" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
              </nav> */}
        


    </div>
  );
}

export default NavbarComponent;
