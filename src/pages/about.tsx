import React from 'react';
import aboutIMG from ".././assets/about.jpg";
import {Link} from "react-router-dom";
import Resume from "../assets/Tinu's Professional Resume.pdf";
import { Heading, Text } from '@chakra-ui/react';


function About() {
  document.title = "About - Tinu Vanapamula";

  return (
    <div className="content">
      <Heading textAlign = "center" as="h1">About Me</Heading>

      <div className="about-outer">
        <div className="about-inner">
          <a href = {Resume} target="blank"><img className="about-img"  src={aboutIMG} style = {{borderRadius: "50%"}} alt = "About IMG"></img></a>
        </div>
        <div className="about-body">
            <Text className = "about-text" fontSize = "24px">
            {/*&nbsp;&nbsp;&nbsp; Hi, I'm Tinu Vanapamula!
            I'm a Sophomore at Montgomery Blair High School and I'm quite passionate about Computer Science.
            Computer Science has been a large part of my life ever since my 6th grade summer.&nbsp;
            I am currently well versed in the world of Web Development, and interested in branching out to other topics in computer science.
            I have won the <a target = "blank" href = "https://www.congressionalappchallenge.us/" className="about-link">Congressional App Challenge</a> in Maryland's District MD-03 for both the years of 2019 and 2020.
            You can learn more about my creations <Link className="about-link" to="/creations">Here</Link>.
            Additionally, I am interested in electronic engineering and have participated in an Engineering Challenge at John's Hopkins Applied Physics lab.
            Learn more about my achievements and the competitions I've participated in <Link className="about-link" to="/competitions-achievements">Here</Link>.
            My hobbies include DIY Projects with electronics and the occasional video production.*/}   

            &nbsp;&nbsp;&nbsp;Hey, I'm Tinu Vanapamula!
            I'm a sophomore at Montgomery Blair High School interested in tech and Computer Science.&nbsp;
            Full-stack web development, engineering, server management, and a variety of other topics are among my interests.&nbsp;
            Over the years, I've worked on a variety of projects, which you can find <Link className="about-link" to="/creations">here</Link>.
            If you'd like to learn more about my achievements click <Link className="about-link" to="/competitions-achievements">here</Link>.
            If you'd like to learn more about my school life click <Link className="about-link" to="/competitions-achievements">here</Link>.
            In my spare time, I like to play chess and work with my homelab.
            </Text>
        </div>
      </div>
    </div>
  );
}

export default About;