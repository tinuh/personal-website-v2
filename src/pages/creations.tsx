import React from 'react';
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useColorMode, Heading, Button } from '@chakra-ui/react';
import ReactHtmlParser from 'react-html-parser';

function Creations() {
  document.title = "Creations - Tinu Vanapamula";
  const {colorMode} = useColorMode();
  const Airtable = require('airtable');
  const api = process.env.REACT_APP_AIRTABLE_API_KEY;
  let base = new Airtable({apiKey: api}).base('appj7u8nrwKWHIEdc');
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {

      base('Creations').select({filterByFormula: "({Status} = 'Published')", sort: [{field: "Priority", direction: "asc"}]}).eachPage(function page(records, fetchNextPage) {
        setData(records)
        setLoading(false);
        console.log(records);
        console.log("Fetched Data")
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (!loading ? (
    <div className="content">
      <Heading textAlign = "center" as="h1">My Creations</Heading>

      <div className = "creations-div">
          <div className="row">
            {data.map(({ fields }) => 
              <div className = "col-md-4">
              <Card className = {colorMode === "light" ? "creation-card mb-3" : "creation-card text-white bg-dark mb-3"}>
                <Card.Img variant="top" src={fields.Image && fields.Image[0].url}/>
                <Card.Body>
                    <div style = {{textAlign: "center"}}><Card.Title>{fields.Name}</Card.Title></div>
                    <Card.Text style = {{fontSize: '16px'}}>
                      {ReactHtmlParser(fields.Description)}

                      {fields['Read More Page'] && (<> 
                          &nbsp;Click <Link className = "index-link" to = {"/articles/" + fields['Read More Page']}>Here</Link> to read more.
                      </>)}
                      
                    </Card.Text>
                    <div style = {{textAlign: "center"}}><a target = "blank" style = {{textDecoration: "none"}} href = {fields.URL}><Button className = "creation-button" variant="outline">{fields["Button Overide"] ? fields["Button Overide"] : "Visit Site"}</Button></a></div>
                </Card.Body>
              </Card><br/>
            </div>
            )}
          </div>
      </div><br/>
    </div>
  ) : 
  (
    <div className="content">
      <div className = "loading">
        <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
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
  ));
}

export default Creations;
