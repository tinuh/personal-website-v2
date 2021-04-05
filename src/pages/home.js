import React from 'react';
import aboutIMG from ".././assets/backgroundless-small.png";
import {Link} from 'react-router-dom';
import { Wave } from "react-animated-text";

function Home() {
  document.title = "Tinu Vanapamula";

  return (
    <div className="content">
        <div className="home-img" style = {{textAlign: 'center'}}>
          <Link to = "/about"><img className="about-img"  src={aboutIMG} alt = "About IMG"></img></Link>
        </div>

        <center className = "home-text">
          <Wave
            text="Hi, I'm Tinu Vanapamula"
            effect="verticalFadeIn"
            effectChange={2.5}
            effectDirection='up'
            iterations={1}          />
        </center>

        <center className = "home-text-sub">
          <Wave
            text="Click me to learn more"
            effect="verticalFadeIn"
            effectChange={2.5}
            effectDirection='down'
            iterations={1}          />
        </center><br/><br/>

        {/* <Message type = "success" message = "Welcome to my Website!" dismiss = "5000" /> */}

        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Picture}
              alt="First slide"
            />
            <Carousel.Caption className = "carousel-caption">
              <h2>Hi, I'm Tinu Vanapamula!</h2>
                <p>Click <strong><Link className="index-link" to="/about">Here</Link></strong> to read more.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="index-about">
            <h4 className="about-text">
                Hi, I'm Tinu Vanapamula!
                I'm an Freshman at Montgomery Blair High School and I'm very passionate about Computer Science.
                Click <Link to="/about" className="text-link">Here</Link> to read more.
            </h4>
        </div> */}
    </div>
  );
}

export default Home;
