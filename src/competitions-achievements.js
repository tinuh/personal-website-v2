import React from 'react';
import './App.css';
import { useState } from "react";
import { Collapse } from "react-bootstrap";
//import Alert from "./alert"
import {Link} from "react-router-dom";
import { store } from 'react-notifications-component';

function CompetitionsAchievements() {
  const [year2020, set2020] = useState(false);
  const [year2019, set2019] = useState(false);
  const [year2016, set2016] = useState(false);

  React.useEffect(() => {
    document.title = "Competitions & Achievements - Tinu Vanapamula";
    store.addNotification({
      title: "Hint",
      message: "Click on the year to learn more",
      type: "info",
      insert: "top",
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
    <div className="404">
      <h1 className="heading">Competitions & Achievements</h1>

      <div className="competition-div">
        <h2 className="sub-heading"><Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2020} onClick={() => set2020(!year2020)}>2020</Link></h2>
        <hr color="#ffffff" />

            <Collapse in={year2020}>
                <div>
                    <h3 className="competition">May - Participated in 2019-2020 <a className="competition-link" target = "blank" href = "https://acsl.org">ACSL</a> Finals Junior Division</h3>
                    <h3 className="competition">March - <a className = "competition-link" href = "https://secwww.jhuapl.edu/stem/mesa/winners/" target = "blank">3rd Place </a> JHU-APL MESA <a className = "competition-link" href = "https://secwww.jhuapl.edu/stem/mesa/school-based-program/competitions" target = "blank">NEDC Engineering Competition</a> (as <a className = "competition-link" href = "https://www.youtube.com/channel/UCO_5muSlEd5sDPZyKTuJbNA/" target = "blank">STEM Thunders</a>) </h3>
                </div>
            </Collapse><br />

        <h2 className="sub-heading"><Link className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2019} onClick={() => set2019(!year2019)}>2019</Link></h2>
        <hr color="#ffffff"/>

          <Collapse in = {year2019} id = "2019">
              <div>
                  <h3 className="competition">December - Won the <a className="competition-link" href="https://www.congressionalappchallenge.us/" target="blank">Congressional App Challenge</a> for Maryland <a className="competition-link" href="https://www.congressionalappchallenge.us/19-MD03" target="blank">District MD-03</a></h3>
                  <h3 className="competition">August - Got my 2nd Degree Black Belt in Tae-Kwon-Do (at <a className="competition-link" href="http://musamd.com" target="blank">Musa Martial Arts</a>)</h3>
                  <h3 className="competition">March - 2nd Place for JHU-APL MESA <a className="competition-link" href="https://secwww.jhuapl.edu/stem/mesa/school-based-program/competitions" target="blank">Alice Middle School Coding Competition</a> (as <a className="competition-link" href="https://www.youtube.com/channel/UCO_5muSlEd5sDPZyKTuJbNA/" target="blank">STEM Thunders</a>)</h3>
              </div>
          </Collapse><br/>

        <h2 className="sub-heading"><Link to="#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2016} onClick={() => set2016(!year2016)}>2016</Link></h2>
        <hr color="#ffffff"/>

          <Collapse in={year2016}>
              <div>
                  <h3 className="competition">April - Got my 1st Degree Black Belt in Tae-Kwon-Do (at <a className="competition-link" href="http://musamd.com" target="blank">Musa Martial Arts</a>)</h3>
              </div>
          </Collapse>

      </div>
    </div>
  );
}

export default CompetitionsAchievements;
