import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from "react-router-bootstrap";
import { useState } from 'react';
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import dark from './img/dark.png';
import light from './img/light.png';

function NavbarComponent(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="Navbar">
      <Navbar expanded={expanded} fixed = "top" bg={props.theme} expand="lg" className = {props.theme === "dark" ? "navbar-dark" : "navbar-light"}>
        <LinkContainer exact to = "/">
            <Navbar.Brand>Tinu Vanapamula</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/" onClick={() => setExpanded(false)}><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer exact to="/school" onClick={() => setExpanded(false)}><NavLink>School</NavLink></LinkContainer>
                <LinkContainer exact to="/competitions-achievements" onClick={() => setExpanded(false)}><NavLink>Competitions & Achievements</NavLink></LinkContainer>
                <LinkContainer exact to="/homework-manager" onClick={() => setExpanded(false)}><NavLink>Homework Manager</NavLink></LinkContainer>
                <LinkContainer exact to="/creations" onClick={() => setExpanded(false)}><NavLink onClick={() => setExpanded(false)}>Creations</NavLink></LinkContainer>
                <LinkContainer exact to="/about" onClick={() => setExpanded(false)}><NavLink>About</NavLink></LinkContainer>
                <NavLink>{props.theme === "dark" ?
                    <Toggle
                            onChange={() => props.toggle()}
                            checked={true}
                            icons={{checked: <img alt = "dark" className='themeicon' src={dark} />, unchecked: <img alt = "light" className='themeicon' src={light} />}}
                    />
                    :
                    <Toggle
                            onChange={() => props.toggle()}
                            checked={false}
                            icons={{checked: <img alt = "dark"  className='themeicon' src={dark} />, unchecked: <img alt = "light" className='themeicon' src={light} />}}
                    />
                }</NavLink>


            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComponent;
