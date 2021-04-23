import React from 'react';
//import Message from "./alert";
import { store } from 'react-notifications-component';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Heading, Text } from "@chakra-ui/react"

interface params {
  name?: string;
}

function Article(props) {
  const {name} = useParams<params>();
  const Airtable = require('airtable');
  const api = process.env.REACT_APP_AIRTABLE_API_KEY;
  let base = new Airtable({apiKey: api}).base('appj7u8nrwKWHIEdc');
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>([]);
  //document.title = (data !== undefined ? data.name : "404: Article does not exist") + " - Tinu Vanapamula";

  
  React.useEffect(() => {
    base('Articles').select({filterByFormula: `AND({Identifier} = '${name}', OR({Status} = 'Published', {Status} = 'Dev'))`}).eachPage(async function page(records, fetchNextPage) {
      if(records[0]){
        await setData(records[0].fields)
        await console.log(records);
        await console.log("Fetched Data")

        await store.addNotification({
          title: "Live Site",
          message: "Click on title to go to the Live Site",
          type: "default",
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

      }
      else{
        await store.addNotification({
          title: "404",
          message: "Article does not exist",
          type: "danger",
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

        await setData(undefined);
      }

      await setLoading(false);
      
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    (data !== undefined && !loading) ? (<div className="content">
      {/* <Message type = "info" message = "to view see the live site" dismiss = "5000" link = "http://homework.tinu.tech"/> */}
      
      <a className="heading" href={data.Link} target="blank" title="Click to view the live site"><Heading textAlign = "center" as="h1">{data.Name}</Heading></a>

      <div className="homework-div">
        <Text fontSize = "25px" className = "homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data["Top Content"])} </Text>
        <div className="video">
          <br/>{data["Youtube Link"] && <div className="video-iframe">
            <iframe width="560" height="315" src={data["Youtube Link"]} title = "Homework Manager Demo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>}<br/>
        </div>
        <Text fontSize = "25px" className = "homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data["Bottom Content"])} </Text>
      </div><br />
    </div>) : (
    <div className="content">
      {loading ? <div className = "loading">
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
        </div> : <div><Heading textAlign = "center">404: Article does not exist</Heading></div>}
    </div>)
  );
}

export default Article;