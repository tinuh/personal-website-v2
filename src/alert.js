import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function Message(props) {
  const [show, setShow] = useState(true);

  if (props.dismiss){
      setTimeout(() => setShow(false),parseInt(props.dismiss));
      clearTimeout();
  }

  return (
    <div className="Alert">
      <Alert show={show} variant={props.type} onClose={() => setShow(false)} dismissible>
          <a target = "blank" href = {props.link} className="message-link">{props.message}</a>
      </Alert>
    </div>
  );
}

export default Message;
