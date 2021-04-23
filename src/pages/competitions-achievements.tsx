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
  const env = process.env.REACT_APP_ENV;
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
    const filter = env === "prod" ? {filterByFormula: "({Status} = 'Published')", sort: [{field: "Date", direction: "desc"}]} : {filterByFormula: "OR(({Status} = 'Published'), ({Status} = 'Dev'))", sort: [{field: "Date", direction: "desc"}]}
    base('Achievements').select(filter).eachPage(async function page(records) {
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
    </div>) : (
      <div className = "content">
        <div className = "loading">
        <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
          <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
          </path>
          <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="-360 50 50" 
              repeatCount="indefinite" />
          </path>
            <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z">
              <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="2s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
    )
  );
}

export default CompetitionsAchievements;