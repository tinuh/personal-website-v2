import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
//import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import homework_img from "./img/homework-manager.jpg";
import digital_fit from "./img/digital_fit.png";
import embeder from "./img/embeder.jpg";
import reflex from "./img/reflex.jpg";

function Creations(props) {
  document.title = "Creations - Tinu Vanapamula";

  return (
    <div className="Creations">
      <h1 className="heading">My Creations</h1>

      <div className = "creations-div">
          <div className="row">

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={digital_fit} />
                  <Card.Body>
                      <Card.Title>Digital Fit</Card.Title>
                      <Card.Text>
                        Digital Fit is a web application that reminds anyone who uses their computer to take occasional breaks to prevent eye strain & chronic pain.
                        It also includes tools that help you to breath and exercise.
                      </Card.Text>
                      <center><a target = "blank" href = "http://fit.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={homework_img} />
                  <Card.Body>
                      <Card.Title>Homework Manager</Card.Title>
                      <Card.Text>
                          This Is The Homework Manager.
                          A New Type Of Tool For Classrooms.
                          It Helps Classrooms Keep Track Of All Types Of Things Including Homework And Announcements.
                          Click <Link className = "index-link" to = "/homework-manager">Here</Link> to read more.
                      </Card.Text>
                      <center><a target = "blank" href = "http://homework.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Live Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={embeder} />
                  <Card.Body>
                      <Card.Title>Youtube Embeder</Card.Title>
                      <Card.Text>
                          The Youtube Embeder is a tool for in-school use.
                          It takes the input of a youtube link and opens a tab with an embeded version.
                          This allows students at school to view academically relevant videos.
                      </Card.Text>
                      <center><a target = "blank" href = "https://embed.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
              <Card className = {props.theme === "light" ? "creation-card" : "creation-card text-white bg-dark mb-3"}>
                <Card.Img variant="top" src={reflex} />
                <Card.Body>
                    <Card.Title>Reflex Game</Card.Title>
                    <Card.Text>
                        This Reflex Game requires thinking and is designed to test both your reflex and ability to predict.
                        The challenge is get the pebble in the center of the bar with a dynamic boost after you click on stop.
                    </Card.Text>
                    <center><a target = "blank" href = "http://reflex.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Play game</Button></a></center>
                </Card.Body>
              </Card><br/>
              </div>
          </div>
      </div> <br />
    </div>
  );
}

export default Creations;
