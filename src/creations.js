import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import homework_img from "./img/homework-manager.jpg";
import embeder from "./img/embeder.jpg";
import reflex from "./img/reflex.jpg";

function Creations() {
  document.title = "Creations - Tinu Vanapamula";

  return (
    <div className="Creations">
      <h1 className="heading">My Creations</h1>

      <div className = "creations-div">
          <CardDeck>
              <Card className = "creation-card">
                <Card.Img variant="top" src={homework_img} />
                <Card.Body>
                    <Card.Title>Homework Manager</Card.Title>
                    <Card.Text>
                        This Is The Homework Manager.
                        A New Type Of Tool For Classrooms.
                        It Helps Classrooms Keep Track Of All Types Of Things Including Homework And Announcements.
                        Click <Link to = "/homework-manager">Here</Link> to read more.
                    </Card.Text>
                    <center><a target = "blank" href = "http://homework.tinu.tech"><Button variant="outline-dark">Visit Live Site</Button></a></center>
                </Card.Body>
              </Card>

              <Card className = "creation-card">
                <Card.Img variant="top" src={embeder} />
                <Card.Body>
                    <Card.Title>Youtube Embeder</Card.Title>
                    <Card.Text>
                        The Youtube Embeder is a tool for in-school use.
                        It takes the input of a youtube link and opens a tab with an embeded version.
                        This allows students at school to view academically relevant videos.
                    </Card.Text>
                    <center><a target = "blank" href = "https://embed.tinu.tech"><Button variant="outline-dark">Visit Site</Button></a></center>
                </Card.Body>
              </Card>

              <Card className = "creation-card">
                <Card.Img variant="top" src={reflex} />
                <Card.Body>
                    <Card.Title>Reflex Game</Card.Title>
                    <Card.Text>
                        This Reflex Game requires thinking and is designed to test both your reflex and ability to predict.
                        The challenge is get the pebble in the center of the bar with a dynamic boost after you click on stop.
                    </Card.Text>
                    <center><a target = "blank" href = "http://reflex.tinu.tech"><Button variant="outline-dark">Play game</Button></a></center>
                </Card.Body>
              </Card>
          </CardDeck>
      </div>
    </div>
  );
}

export default Creations;
