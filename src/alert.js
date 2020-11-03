import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';


function Message(props) {
  const [show, setShow] = useState(true);
  var message = props.message;

  if (props.dismiss){
      setTimeout(() => setShow(false),parseInt(props.dismiss));
      clearTimeout();
  }

  return (
    <div className="Alert">
      <Alert show={show} variant={props.type} onClose={() => setShow(false)} dismissible>
          {props.link &&
          <>Click <strong><a className="message-link" target = "blank" href = {props.link}>Here</a></strong> </>
          }
          {props.hint === true &&
            <strong>Hint: </strong>
          }
          {message}
      </Alert>
    </div>
  );
}

export default Message;
