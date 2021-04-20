import React from 'react';
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useColorMode, Heading, Text } from '@chakra-ui/react';
import { store } from 'react-notifications-component';
import ReactHtmlParser from 'react-html-parser';

function CompetitionsAchievements() {
  document.title = "Competitions & Achievements - Tinu Vanapamula";
  const [collapse, setCollapse] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const {colorMode} = useColorMode();

  //init airtable connection
  const Airtable = require('airtable');
  const api = process.env.REACT_APP_AIRTABLE_API_KEY;
  let base = new Airtable({apiKey: api}).base('appj7u8nrwKWHIEdc');
  
  const month = (val) => {
    let date = new Date(val);
    return date.toLocaleString('default', { month: 'long' });
  }

  const year = (val) => {
    let date = new Date(val);
    return date.getFullYear();
  }

  React.useEffect(() => {
    base('Achievements').select({filterByFormula: "({Status} = 'Published')", sort: [{field: "Date", direction: "desc"}]}).eachPage(async function page(records) {
      let sortedData = {};
      await records.forEach(record  => {
        if (!sortedData[year(record.fields.Date)]){
          let y = year(record.fields.Date)
          sortedData[y] = [];
          collapse[y] = false;
        }
      });
      await records.forEach(record => {
        sortedData[year(record.fields.Date)].push(record);
      })

      console.log(sortedData);

      await setData(sortedData);
      await setLoading(false);
      console.log(records);
      console.log("Fetched Data")

      await store.addNotification({
        title: "Hint",
        message: "Click on the year to learn more",
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
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loading ? 
    (<div className="content">
      <Heading textAlign = "center" as="h1">Competitions & Achievements</Heading>

      <div className="competition-div">

      {Object.keys(data).sort().reverse().map(year => (
        <div>
          <Link to = "#" className="toggle-collapse" aria-controls="example-collapse-text" aria-expanded={collapse[year]} onClick={() => setCollapse({[year]: !collapse[year]})}><Heading className = "sub-heading" fontSize = "30px" as="h2">{year}</Heading></Link> 
          <hr color = {colorMode === "dark" ? "#ffffff" : "#000000"} />
          <Collapse in={collapse[year]}>
            <div>
              {data[year].map(({ fields }) => 
              (<Text fontSize = "24px" className="competition">{month(fields.Date) + " - "}{ReactHtmlParser(fields.Name)}</Text>))}
            </div>
          </Collapse><br/>
        </div>
      ))}

      </div><br/>
    </div>) : (<div><Heading textAlign = "center" as="h1">Loading...</Heading></div>)
  );
}

export default CompetitionsAchievements;