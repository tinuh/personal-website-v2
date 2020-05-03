import React from 'react';
import './App.css';
import aboutIMG from "./img/about.jpg";
import {Link} from "react-router-dom";

function About() {
  document.title = "About - Tinu Vanapamula";

  return (
    <div className="About">
      <h1 className="heading">About Me</h1>

      <div className="about-outer">
        <div className="about-inner">
          <img className="about-img" src={aboutIMG} alt = "About IMG"></img>
        </div>
        <div className="about-body">
          <h4 className="about-text">
            &nbsp;&nbsp;&nbsp; Hi, I'm Tinu Vanapamula!
            I'm an 8th grader at Takoma Park Middle School and I'm very passionate about Computer Science.
            I have been interested in Computer Science ever since 6th grade.
            Since then, I have learned Python, Javascript, and HTML.
            With this knowledge I have been actively participating Computer Science Competitions.
            So far, in my career, I have won the congressional app challenge in Maryland's District MD-03.
            I developed a web-application called the Homework Manager.
            You can learn more about that <Link className="about-link" to="/homework-manager">Here</Link>.
            Additionally, I have participated in an Engineering Challenge at John's Hopkins Applied Physics lab.
            Learn more about my achievements and the competitions I participated in <Link className="about-link" to="/competitions-achievements">Here</Link>.
            Additionally, One of my favorite hobbies is making media, I enjoy the art of video production because it is
            fun and I get to express myself.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
