import React from 'react';
import aboutIMG from ".././assets/backgroundless-small.png";
import {Link} from 'react-router-dom';
import { Wave } from "react-animated-text";
import { Box, Center } from "@chakra-ui/react"

function Home() {
  document.title = "Tinu Vanapamula";

  return (
    <div className="content">
        <Box className="home-img">
          <Center><Link to = "/about"><img className="about-img" src={aboutIMG} alt = "About IMG"></img></Link></Center>
        </Box>

        <div className = "home-text">
          <Wave
            text="Hi, I'm Tinu Vanapamula"
            effect="verticalFadeIn"
            effectChange={2.5}
            effectDirection='up'
            iterations={1}          />
        </div>

        <div className = "home-text-sub">
          <Wave
            text="Click me to learn more"
            effect="verticalFadeIn"
            effectChange={2.5}
            effectDirection='down'
            iterations={1}          />
        </div><br/><br/>
        
    </div>
  );
}

export default Home;