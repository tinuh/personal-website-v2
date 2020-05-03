import React from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";
import Picture from "./img/new_york.jpg"
import Message from "./alert";
import {Link} from "react-router-dom";

function Home() {
  document.title = "Tinu Vanapamula";

  return (
    <div className="Home">
        <Message type = "success" message = "Welcome to my Website!" dismiss = "5000" />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Picture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Hi, I'm Tinu Vanapamula!</h2>
                <p>Click <strong><Link className="index-link" to="/about">Here</Link></strong> to read more.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Home;
