import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from "react-router-bootstrap";

function NavbarComponent() {
  return (
    <div className="Navbar">
      <Navbar fixed = "top" bg="dark" expand="lg" className = "navbar-dark">
        <LinkContainer exact to = "/">
            <Navbar.Brand>Tinu Vanapamula</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to="/"><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer exact to="/school"><NavLink>School</NavLink></LinkContainer>
                <LinkContainer exact to="/competitions-achievements"><NavLink>Competitions & Achievements</NavLink></LinkContainer>
                <LinkContainer exact to="/homework-manager"><NavLink>Homework Manager</NavLink></LinkContainer>
                <NavLink href="https://tools.tinu.tech">Tools</NavLink>
                <LinkContainer exact to="/about"><NavLink>About</NavLink></LinkContainer>


            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComponent;
