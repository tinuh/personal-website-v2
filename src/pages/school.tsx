import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import { store } from 'react-notifications-component';
import { useColorMode, Heading, Text } from '@chakra-ui/react';

function School() {
  document.title = "School - Tinu Vanapamula";

  const [blair, setBlair] = useState(false);
  const [tpms, setTpms] = useState(false);
  const [drew, setDrew] = useState(false);
  const [bes, setBes] = useState(false);
  const { colorMode } = useColorMode();
  

  React.useEffect(() => {
    store.addNotification({
      title: "Hint",
      message: "Click on the School to learn more.",
      type: "info",
      insert: "bottom",
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
      <Heading textAlign = "center" as="h1">School</Heading>

      <div className="school-div">
      <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={blair} onClick={() => setBlair(!blair)}><Heading className = "sub-heading" fontSize = "30px" as="h2">Montgomery Blair High School</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={blair}>
                <div>
                  <Text className='school-text' fontSize = "24px">I'm a Sophomore at <a className="school-link" href="https://mbhs.edu/" target="blank">Montgomery Blair High School</a> for the 2020-2021 school year. I am attending the Magnet Math, Science, and Computer Science Program. </Text>
                </div>
            </Collapse><br />

        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={tpms} onClick={() => setTpms(!tpms)}><Heading className = "sub-heading" fontSize = "30px" as="h2">Takoma Park Middle School</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={tpms}>
                <div>
                    <Text fontSize = "24px" className="school-text">I attended <a className="school-link" href="https://www.montgomeryschoolsmd.org/schools/takomaparkms/" target="blank">Takoma Park Middle School</a> from 2016 - 2020 for the Magnet Math, Science, and Computer Science Program.</Text>
                </div>
            </Collapse><br />

        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={drew} onClick={() => setDrew(!drew)}><Heading className = "sub-heading" fontSize = "30px" as="h2">Dr. Charles R. Drew Elementary School</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />

            <Collapse in={drew}>
                <div>
                    <Text fontSize = "24px" className="school-text">I attended the Gifted and Talented Program at <a className="school-link" href="https://www2.montgomeryschoolsmd.org/schools/drewes/" target="blank">Dr. Charles R. Drew Elementary School</a> throughout my 4th and 5th grade years, from 2015 through 2017.</Text>
                </div>
            </Collapse><br />

        <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={bes} onClick={() => setBes(!bes)}><Heading className = "sub-heading" fontSize = "30px" as="h2">Burtonsville Elementary School</Heading></Link>
        <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"}/>

            <Collapse in={bes}>
                <div>
                    <Text fontSize = "24px" className="school-text">I attended <a className="school-link" href="https://www2.montgomeryschoolsmd.org/schools/burtonsvillees/" target="blank">Burtonsville Elementary School</a> from Kindergarten all the way to 3rd grade.</Text>
                </div>
            </Collapse>
      </div><br/>
    </div>
  );
}

export default School;
