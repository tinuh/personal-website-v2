import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
//import Alert from "./alert";
import { useState } from 'react';
import { store } from 'react-notifications-component';

function School(props) {
  const [blair, setBlair] = useState(false);
  const [tpms, setTpms] = useState(false);
  const [drew, setDrew] = useState(false);
  const [bes, setBes] = useState(false);
  document.title = "School - Tinu Vanapamula";

  React.useEffect(() => {
    store.addNotification({
      title: "Hint",
      message: "Click on the School to learn more.",
      type: "info",
      insert: "bottom",
      isMobile: true,
      container: "bottom-right",
      animationIn: ["animated", "flipInX"],
      animationOut: ["animated", "flipOutX"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true
      },
    });
  }, []);

  return (
    <div className="content">
      {/* <Alert message = "Click on the School to see more" type = "primary" dismiss = "5000" hint/> */}
      <h1 className="heading">School</h1>

      <div className="school-div">
        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={blair} onClick={() => setBlair(!blair)}>Montgomery Blair High School</Link></h2>
        <hr color = {props.theme === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={blair}>
                <div>
                    <h4 className="school-text">I am a Freshman at <a className="school-link" href="https://mbhs.edu/" target="blank">Montgomery Blair High School</a> for the 2020-2021 school year. I am attending the Magnet Math, Science, and Computer Science Program. </h4>
                </div>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={tpms} onClick={() => setTpms(!tpms)}>Takoma Park Middle School</Link></h2>
        <hr color = {props.theme === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={tpms}>
                <div>
                    <h4 className="school-text">I attended <a className="school-link" href="https://www.montgomeryschoolsmd.org/schools/takomaparkms/" target="blank">Takoma Park Middle School</a> from 2016 - 2020 for the Magnet Math, Science, and Computer Science Program.</h4>
                </div>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={drew} onClick={() => setDrew(!drew)}>Dr. Charles R. Drew Elementary School</Link></h2>
        <hr color = {props.theme === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={drew}>
                <div>
                    <h4 className="school-text">I attended the Gifted and Talented Program at <a className="school-link" href="https://www2.montgomeryschoolsmd.org/schools/drewes/" target="blank">Dr. Charles R. Drew Elementary School</a> throughout my 4th and 5th grade years, from 2015 through 2017.</h4>
                </div>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={bes} onClick={() => setBes(!bes)}>Burtonsville Elementary School</Link></h2>
        <hr color = {props.theme === "dark" ? "#ffffff" : "#000000"}/>

            <Collapse in={bes}>
                <div>
                    <h4 className="school-text">I attended <a className="school-link" href="https://www2.montgomeryschoolsmd.org/schools/burtonsvillees/" target="blank">Burtonsville Elementary School</a> from Kindergarten all the way to 3rd grade.</h4>
                </div>
            </Collapse>
      </div>
    </div>
  );
}

export default School;
