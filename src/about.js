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
            I'm an upcoming 9th grader at Montgomery Blair High School and I'm very passionate about Computer Science.
            I have been interested in Computer Science ever since 6th grade.
            {/* Mr. Bhaskar Ganti played a huge role in my computer science career by mentoring me.
            He is also the CEO of <a target = "blank" href = "http://issi-software.com" className="about-link">International Software Systems Inc</a>. */}
            I have learned Python, Javascript, and HTML, and a few web development frameworks (Ex. Django, Express, React).
            I am currently interesting in Web Development, and trying to get into Competitive Programming.
            So far, in my career, I have won the <a target = "blank" href = "https://www.congressionalappchallenge.us/" className="about-link">Congressional App Challenge</a> in Maryland's District MD-03.
            You can learn more about that <Link className="about-link" to="/homework-manager">Here</Link>.
            Additionally, I have participated in an Engineering Challenge at John's Hopkins Applied Physics lab.
            Learn more about my achievements and the competitions I participated in <Link className="about-link" to="/competitions-achievements">Here</Link>.
            Additionally, One of my favorite hobbies is Video Production, it involves creativity and is a great way to Express myself.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
