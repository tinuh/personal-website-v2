import React from 'react';
//import Message from "./alert";
import { store } from 'react-notifications-component';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { useToast, Heading } from "@chakra-ui/react"

function Article(props) {
  const toast = useToast()
  const {name} = useParams();
  const Airtable = require('airtable');
  const api = process.env.REACT_APP_AIRTABLE_API_KEY;
  let base = new Airtable({apiKey: api}).base('appj7u8nrwKWHIEdc');
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  //document.title = (data !== undefined ? data.name : "404: Article does not exist") + " - Tinu Vanapamula";

  
  React.useEffect(() => {
    base('Articles').select({filterByFormula: `AND({Identifier} = '${name}', {Status} = 'Published')`}).eachPage(async function page(records, fetchNextPage) {
      if(records[0]){
        await setData(records[0].fields)
        await console.log(records);
        await console.log("Fetched Data")

        await toast({
          title: 'Live Site',
          description: "Click on title to go to the Live Site",
          position: "bottom-right",
          status: "success",
          isClosable: true,
        })

      }
      else{
        await store.addNotification({
          title: "404",
          message: "Article does not exist",
          type: "danger",
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
        <Heading as="h3" fontSize = "25px" className = "homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data["Top Content"])} </Heading>
        <div className="video">
          <br/>{data["Youtube Link"] && <div className="video-iframe">
            <iframe width="560" height="315" src={data["Youtube Link"]} title = "Homework Manager Demo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>}<br/>
        </div>
        <Heading as="h3" fontSize = "25px" className = "homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data["Bottom Content"])} </Heading>
      </div><br />
    </div>) : (<div> <h1 className="content heading">{!loading ? "404: Article does not exist" : "Loading..."}</h1> </div>)
  );
}

export default Article;