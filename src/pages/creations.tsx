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
    <div className="content" >
      <Heading textAlign = "center" as="h1">Loading...</Heading>
    </div>
  ));
}

export default Creations;
