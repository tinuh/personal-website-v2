import React from 'react';
import './App.css';
import instagram from "./img/instagram.png";
import github from "./img/github.png";
import youtube from "./img/youtube.png";


function Footer() {
  return (
    <div className="Footer">
      <footer className="py-4 bg-dark text-white-50 fixed-bottom">
        <div className="container text-center">
          <a title="Github" href="https://github.com/tinuh" target="blank"><img className="icon" src={github} alt = "Github" /></a> &nbsp;
          <a title="Youtube" href="https://www.youtube.com/channel/UCw5UJG0Rw5KtQu5D3V3eHqw" target="blank"><img className="icon" src={youtube} alt = "Youtube" />></a> &nbsp;
          <a title="Instagram" href="https://www.instagram.com/tinu.vanapamula" target="blank"><img className="icon" src={instagram} alt = "Instagram" /></a> &nbsp;
          <small>Copyright &copy; 2020 Tinu Vanapamula</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;