import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function NotFound() {
  return (
    <div className="content">
      <h1 className="heading">404</h1>
      <h4 className="heading">Page Not Found</h4><br />

      <center><Link to = "/"><Button variant = "outline-light">Go Back Home</Button></Link></center>
    </div>
  );
}

export default NotFound;
