import React from 'react';
import { Card } from "react-bootstrap";
//import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {useColorMode} from '@chakra-ui/react';
import ReactHtmlParser from 'react-html-parser';
const creations = require('../data/creations');

function Creations() {
  document.title = "Creations - Tinu Vanapamula";
  const {colorMode} = useColorMode();

  return (
    <div className="content">
      <h1 className="heading">My Creations</h1>

      <div className = "creations-div">
          <div className="row">
            {creations.map(({ name, description, url, readMorePage, github, img, buttonOveride}) => 
              <div className = "col-md-4">
              <Card className = {colorMode === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <center><Card.Title>{name}</Card.Title></center>
                    <Card.Text style = {{fontSize: '16px'}}>
                      {ReactHtmlParser(description)}

                      {readMorePage && (<> 
                          &nbsp;Click <Link className = "index-link" to = {"/articles/" + readMorePage}>Here</Link> to read more.
                      </>)}
                      
                    </Card.Text>
                    <center><a target = "blank" href = {url}><Button variant={colorMode === "light" ? "outline-dark" : "outline-light"}>{buttonOveride ? buttonOveride : "Visit Site"}</Button></a></center>
                </Card.Body>
              </Card><br/>
            </div>
            )}
          </div>
      </div><br/>
    </div>
  );
}

export default Creations;
