import React from 'react';
import aboutIMG from ".././assets/backgroundless-small.png";
import {Link} from 'react-router-dom';
import { Wave } from "react-animated-text";
import { Box } from "@chakra-ui/react"

function Home() {
  document.title = "Tinu Vanapamula";

  return (
    <div className="content">
        <Box className="home-img">
          <center><Link to = "/about"><img className="about-img" src={aboutIMG} alt = "About IMG"></img></Link></center>
        </Box>

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
        
    </div>
  );
}

export default Home;