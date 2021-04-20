import React from 'react';
import {useColorMode} from '@chakra-ui/react';
import instagram from "../assets/instagram.png";
import github_light from "../assets/github-light.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedln.png";
import document from "../assets/document.svg";
import Resume from "../assets/Tinu's Professional Resume.pdf";
import { Box, Text, Tooltip, Link, IconButton } from '@chakra-ui/react';

function Footer() {
  const {colorMode} = useColorMode();

  return (
    <div className="footer-div">
      <footer className = "py-3 fixed-bottom" style={{background: 'linear-gradient(90deg, var(--light), 0%, var(--cyan) 0%, var(--danger) 100%), var(--blue)'}}>
        <Box className="container text-center">

          <span className="centerer">
            <Box className = "footer-icons">
              <Tooltip label="GitHub">
                <Link href="https://github.com/tinuh" isExternal><IconButton aria-label = "Github" icon = {<img className="icon" src={github_light} alt = "Github" />}></IconButton></Link>
              </Tooltip> &nbsp;
              <Tooltip label="Linkedin">
                <Link href="https://www.linkedin.com/in/tinu-vanapamula/" isExternal><IconButton aria-label = "Linkedin" icon = {<img className="icon" src={linkedin} alt = "Linkedin" />}></IconButton></Link>
              </Tooltip> &nbsp;
              <Tooltip label="Youtube">
                <Link href="https://www.youtube.com/channel/UCw5UJG0Rw5KtQu5D3V3eHqw" isExternal><IconButton aria-label = "Youtube" icon = {<img className="icon" src={youtube} alt = "Youtube" />}></IconButton></Link>
              </Tooltip> &nbsp;
              <Tooltip label="Instagram">
                <Link href="https://www.instagram.com/tinu.vanapamula/" isExternal><IconButton aria-label = "Instagram" icon = {<img className="icon" src={instagram} alt = "Instagram" />}></IconButton></Link>
              </Tooltip> &nbsp;
              <Tooltip label="Resume">
                <Link href={Resume} isExternal><IconButton aria-label = "Resume" icon = {<img className="icon" src={document} alt = "Resume" />}></IconButton></Link>
              </Tooltip> &nbsp;
            </Box>
          </span>&nbsp;
          
          <span className='centered'>
            <Text display = "inline-block" className={colorMode === "dark" ? "footer-text-light" : "footer-text-dark"}>Copyright &copy; 2021 Tinu Vanapamula</Text>
          </span>
          
        </Box>
      </footer>
    </div>
  );
}

export default Footer;