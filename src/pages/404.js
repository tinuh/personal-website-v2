import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useColorMode} from '@chakra-ui/react';

function NotFound() {
  const { colorMode } = useColorMode();

  return (
    <div className="content">
      <h1 className="heading">404</h1>
      <h4 className="heading">Page Not Found</h4><br />

      <center><Link to = "/"><Button variant = {colorMode === "dark" ? "outline-light" : "outline-dark"}>Go Back Home</Button></Link></center>
    </div>
  );
}

export default NotFound;
