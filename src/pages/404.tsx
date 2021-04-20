import React from 'react';
import {Link} from "react-router-dom";
import { Heading, Button } from '@chakra-ui/react';

function NotFound() {

  return (
    <div className="content">
      <Heading textAlign = "center" as="h1">404: Page Not Found</Heading>

      <div style = {{textAlign: "center"}}><Link to = "/" style = {{textDecoration: "none"}}><Button className = "creation-button" variant="outline">Go Back Home</Button></Link></div>
    </div>
  );
}

export default NotFound;
