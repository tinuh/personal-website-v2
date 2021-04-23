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
      <Navbar expanded={expanded} fixed = "top" bg={colorMode} expand="lg" className = {colorMode === "dark" ? "navbar-light portfolio-navbar" : "navbar-dark portfolio-navbar"} style={{background: 'linear-gradient(90deg, var(--light), 0%, var(--cyan) 0%, var(--danger) 100%), var(--blue)'}}>
        <LinkContainer exact to = "/">
            <Navbar.Brand>Tinu Vanapamula</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
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

    </div>
  );
}

export default NavbarComponent;
