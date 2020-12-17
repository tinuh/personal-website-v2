import React from 'react';
import './App.css';
import instagram from "./assets/instagram.png";
import github_dark from "./assets/github.png";
import github_light from "./assets/github-light.png";
import youtube from "./assets/youtube.png";
import linkedin from "./assets/linkedln.png"


function Footer(props) {
  var github;
  if (props.theme === "light"){
    github = github_dark;
  }
  else {
    github = github_light;
  }

  return (
    <div className="footer-div">
      <footer className= {props.theme === "dark" ? "py-4 bg-light text-white-50 fixed-bottom" : "py-4 bg-dark text-white-50 fixed-bottom"} style={{background: 'linear-gradient(90deg, var(--light), 0%, var(--cyan) 0%, var(--danger) 100%), var(--blue)'}}>
        <div className="container text-center">

          <div className = "footer-icons">
            <a title="Github" href="https://github.com/tinuh" target="blank"><img className="icon" src={github} alt = "Github" /></a> &nbsp;
            <a title="Linkedin" href="https://www.linkedin.com/in/tinu-vanapamula/" target="blank"><img className="icon" src={linkedin} alt = "Linkedin" /></a> &nbsp;
            <a title="Youtube" href="https://www.youtube.com/channel/UCw5UJG0Rw5KtQu5D3V3eHqw" target="blank"><img className="icon" src={youtube} alt = "Youtube" /></a> &nbsp;
            <a title="Instagram" href="https://www.instagram.com/tinu.vanapamula" target="blank"><img className="icon" src={instagram} alt = "Instagram" /></a> &nbsp;
          </div>

          <small className={props.theme === "dark" ? "footer-text-light" : "footer-text-dark"}>Copyright &copy; 2020 Tinu Vanapamula</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;