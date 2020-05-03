import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import Alert from "./alert";
import { useState } from 'react';

function School() {
  const [blair, setBlair] = useState(false);
  const [tpms, setTpms] = useState(false);
  const [drew, setDrew] = useState(false);
  const [bes, setBes] = useState(false);
  document.title = "School - Tinu Vanapamula";

  return (
    <div className="School">
      <Alert message = "Click on the School to see more" type = "primary" dismiss = "5000" hint/>
      <h1 className="heading">School</h1>

      <div className="school-div">
        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={blair} onClick={() => setBlair(!blair)}>Montgomery Blair High School</Link></h2>
        <hr color="#ffffff" />

            <Collapse in={blair}>
                <h4 className="school-text">Tinu Vanapamula is an Upcoming 9th grader at <a className="school-link"
                                                                                            href="https://mbhs.edu/"
                                                                                            target="blank">Montgomery
                    Blair High School</a> for the 2020-2021 school year. He will be attending the Magnet Math, Science,
                    and Computer Science Program there. </h4>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={tpms} onClick={() => setTpms(!tpms)}>Takoma Park Middle School</Link></h2>
        <hr color="#ffffff" />

            <Collapse in={tpms}>
                <h4 className="school-text">Tinu Vanapamula is an Upcoming 9th grader at <a className="school-link"
                                                                                            href="https://mbhs.edu/"
                                                                                            target="blank">Montgomery
                    Blair High School</a> for the 2020-2021 school year. He will be attending the Magnet Math, Science,
                    and Computer Science Program there. </h4>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={drew} onClick={() => setDrew(!drew)}>Dr. Charles R. Drew Elementary School</Link></h2>
        <hr color="#ffffff" />

            <Collapse in={drew}>
                <h4 className="school-text">Tinu Vanapamula is an Upcoming 9th grader at <a className="school-link"
                                                                                            href="https://mbhs.edu/"
                                                                                            target="blank">Montgomery
                    Blair High School</a> for the 2020-2021 school year. He will be attending the Magnet Math, Science,
                    and Computer Science Program there. </h4>
            </Collapse><br />

        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text"
        aria-expanded={bes} onClick={() => setBes(!bes)}>Burtonsville Elementary School</Link></h2>
        <hr color="#ffffff" />

            <Collapse in={bes}>
                <h4 className="school-text">Tinu Vanapamula is an Upcoming 9th grader at <a className="school-link"
                                                                                            href="https://mbhs.edu/"
                                                                                            target="blank">Montgomery
                    Blair High School</a> for the 2020-2021 school year. He will be attending the Magnet Math, Science,
                    and Computer Science Program there. </h4>
            </Collapse>
      </div>
    </div>
  );
}

export default School;
