import React from 'react';
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useColorMode, Heading, Text } from '@chakra-ui/react';
import { store } from 'react-notifications-component';

function CompetitionsAchievements() {
  const [year2021, set2021] = useState(false);
  const [year2020, set2020] = useState(false);
  const [year2019, set2019] = useState(false);
  const [year2016, set2016] = useState(false);
  const {colorMode} = useColorMode();
  
  React.useEffect(() => {
    document.title = "Competitions & Achievements - Tinu Vanapamula";
    store.addNotification({
      title: "Hint",
      message: "Click on the year to learn more",
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
      <Heading textAlign = "center" as="h1">Competitions & Achievements</Heading>

      <div className="competition-div">
      <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2021} onClick={() => set2021(!year2021)}><Heading className = "sub-heading" fontSize = "30px" as="h2">2021</Heading></Link> 
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={year2021}>
                <div>
                    <Text fontSize = "24px" className="competition">March - Best <a className="competition-link" target = "blank" href= "https://devpost.com/software/pollster">UI Hack</a> at <a className = "competition-link" target = "blank" href = "https://mocohacks.org">Mocohacks</a> Hackathon</Text>
                </div>
            </Collapse><br />
        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2020} onClick={() => set2020(!year2020)}><Heading className = "sub-heading" fontSize = "30px" as="h2">2020</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={year2020}>
                <div>
                    <Text fontSize = "24px" className="competition">December - Won the <a className="competition-link" href="https://www.congressionalappchallenge.us/" target="blank">Congressional App Challenge</a> (2nd Time) for Maryland <a className="competition-link" href="https://www.congressionalappchallenge.us/20-MD03" target="blank">District MD-03</a></Text>
                    <Text fontSize = "24px" className="competition">May - Participated in 2019-2020 <a className="competition-link" target = "blank" href = "https://acsl.org">ACSL</a> Finals Junior Division</Text>
                    <Text fontSize = "24px" className="competition">March - <a className = "competition-link" href = "https://secwww.jhuapl.edu/stem/mesa/winners/" target = "blank">3rd Place </a> JHU-APL MESA <a className = "competition-link" href = "https://secwww.jhuapl.edu/stem/mesa/school-based-program/competitions" target = "blank">NEDC Engineering Competition</a> (as <a className = "competition-link" href = "https://www.youtube.com/channel/UCO_5muSlEd5sDPZyKTuJbNA/" target = "blank">STEM Thunders</a>) </Text>
                </div>
            </Collapse><br />

        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2019} onClick={() => set2019(!year2019)}><Heading className = "sub-heading" fontSize = "30px" as="h2">2019</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

          <Collapse in = {year2019} id = "2019">
              <div>
                  <Text fontSize = "24px" className="competition">December - Won the <a className="competition-link" href="https://www.congressionalappchallenge.us/" target="blank">Congressional App Challenge</a> for Maryland <a className="competition-link" href="https://www.congressionalappchallenge.us/19-MD03" target="blank">District MD-03</a></Text>
                  <Text fontSize = "24px" className="competition">August - Got my 2nd Degree Black Belt in Tae-Kwon-Do (at <a className="competition-link" href="http://musamd.com" target="blank">Musa Martial Arts</a>)</Text>
                  <Text fontSize = "24px" className="competition">March - 2nd Place for JHU-APL MESA <a className="competition-link" href="https://secwww.jhuapl.edu/stem/mesa/school-based-program/competitions" target="blank">Alice Middle School Coding Competition</a> (as <a className="competition-link" href="https://www.youtube.com/channel/UCO_5muSlEd5sDPZyKTuJbNA/" target="blank">STEM Thunders</a>)</Text>
              </div>
          </Collapse><br/>

        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={year2016} onClick={() => set2016(!year2016)}><Heading className = "sub-heading" fontSize = "30px" as="h2">2016</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"}/>

          <Collapse in={year2016}>
              <div>
                  <Text fontSize = "24px" className="competition">April - Got my 1st Degree Black Belt in Tae-Kwon-Do (at <a className="competition-link" href="http://musamd.com" target="blank">Musa Martial Arts</a>)</Text>
              </div>
          </Collapse>

      </div><br/>
    </div>
  );
}

export default CompetitionsAchievements;
