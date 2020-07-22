import React from 'react';
import './App.css';
import instagram from "./img/instagram.png";
import github_dark from "./img/github.png";
import github_light from "./img/github-light.png";
import youtube from "./img/youtube.png";


function Footer(props) {
  var github;
  if (props.theme === "dark"){
    github = github_dark;
  }
  else {
    github = github_light;
  }

  return (
    <div className="footer-div">
      <footer className= {props.theme === "dark" ? "py-4 bg-dark text-white-50 fixed-bottom" : "py-4 bg-light text-white-50 fixed-bottom"}>
        <div className="container text-center">
          <a title="Github" href="https://github.com/tinuh" target="blank"><img className="icon" src={github} alt = "Github" /></a> &nbsp;
          <a title="Youtube" href="https://www.youtube.com/channel/UCw5UJG0Rw5KtQu5D3V3eHqw" target="blank"><img className="icon" src={youtube} alt = "Youtube" /></a> &nbsp;
          <a title="Instagram" href="https://www.instagram.com/tinu.vanapamula" target="blank"><img className="icon" src={instagram} alt = "Instagram" /></a> &nbsp;
          <small className={props.theme === "dark" ? "footer-text-dark" : "footer-text-light"}>Copyright &copy; 2020 Tinu Vanapamula</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;