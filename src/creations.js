import React from 'react';
import { Card } from "react-bootstrap";
//import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import pollster from "./assets/pollster.png";
import homework_img from "./assets/homework-manager.jpg";
import digital_fit from "./assets/digital_fit.png";
import embeder from "./assets/embeder.jpg";
import reflex from "./assets/reflex.jpg";

function Creations(props) {
  document.title = "Creations - Tinu Vanapamula";

  return (
    <div className="content">
      <h1 className="heading">My Creations</h1>

      <div className = "creations-div">
          <div className="row">

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={pollster} />
                  <Card.Body>
                      <center><Card.Title>Pollster</Card.Title></center>
                      <Card.Text style = {{fontSize: '16px'}}>
                        Pollster is a geo-based Community Polling App. It was created by Me, <a className = "index-link" target = "blank" href = "https://linkaiwu.com">Linkai Wu</a>, and <a className = "index-link" target = "blank" href = "https://github.com/AnuragGowda">Anurag Gowda</a>.
                        Buisness and concerned citizens can lauch polls to see what the community thinks.
                        Click <Link className = "index-link" to = "/pollster">Here</Link> to read more.
                      </Card.Text>
                      <center><a target = "blank" href = "http://www.pollster.ink"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={digital_fit} />
                  <Card.Body>
                      <center><Card.Title>Digital Fit</Card.Title></center>
                      <Card.Text style = {{fontSize: '16px'}}>
                        Digital Fit is a web app that reminds anyone who uses their computer to take breaks to prevent eye strain & chronic pain.
                        Featuring tools to help you breath and stay active.
                        Click <Link className = "index-link" to = "/digital-fit">Here</Link> to read more.
                      </Card.Text>
                      <center><a target = "blank" href = "http://fit.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
                <Card className = {props.theme === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={homework_img} />
                  <Card.Body>
                      <center><Card.Title>Homework Manager</Card.Title></center>
                      <Card.Text style = {{fontSize: '16px'}}>
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
                <Card className = {props.theme === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                  <Card.Img variant="top" src={embeder} />
                  <Card.Body>
                      <center><Card.Title>Youtube Embeder</Card.Title></center>
                      <Card.Text style = {{fontSize: '16px'}}>
                          The Youtube Embeder is a tool for in-school use.
                          It takes the input of a youtube link and opens a tab with an embeded version.
                          This allows students at school to view academically relevant videos.
                      </Card.Text>
                      <center><a target = "blank" href = "https://embed.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Visit Site</Button></a></center>
                  </Card.Body>
                </Card><br/>
              </div>

              <div className = "col-md-4">
              <Card className = {props.theme === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                <Card.Img variant="top" src={reflex} />
                <Card.Body>
                    <center><Card.Title>Reflex Game</Card.Title></center>
                    <Card.Text style = {{fontSize: '16px'}}>
                        This Reflex Game requires thinking and is designed to test both your reflex and ability to predict.
                        The challenge is get the pebble in the center of the bar with a dynamic boost after you click on stop.
                    </Card.Text>
                    <center><a target = "blank" href = "http://reflex.tinu.tech"><Button variant={props.theme === "light" ? "outline-dark" : "outline-light"}>Play game</Button></a></center>
                </Card.Body>
              </Card>
              </div>
          </div>
      </div><br/>
    </div>
  );
}

export default Creations;
