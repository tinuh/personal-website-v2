import React from 'react';
//import Message from "./alert";
import { store } from 'react-notifications-component';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
const articles = require('../data/articles');

function Article(props) {
  const {name} = useParams();
  const data = articles[name];
  document.title = (data !== undefined ? data.name : "404: Article does not exist") + " - Tinu Vanapamula";

  React.useEffect(() => {
    if (data === undefined) {
      store.addNotification({
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
    }
    else{
      store.addNotification({
        title: "Live Site",
        message: "Click on title to go to the Live Site",
        type: "default",
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
    }
  }, [data]);

  return (
    (data !== undefined) ? (<div className="content">
      {/* <Message type = "info" message = "to view see the live site" dismiss = "5000" link = "http://homework.tinu.tech"/> */}

      <a className="heading" href={data.link} target="blank" title="Click to view the live site"><h1 className="heading">{data.name}</h1></a>

      <div className="homework-div">
        <h3 className="homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data.topContent)} </h3>
        <div className="video">
          <br/>{data.ytEmbed && <div className="video-iframe">
            <iframe width="560" height="315" src={data.ytEmbed} title = "Homework Manager Demo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>}<br/>
        </div>
        <h3 className="homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {ReactHtmlParser(data.bottomContent)} </h3>
      </div><br />
    </div>) : (<div> <h1 className="heading content">404: Article does not exist</h1> </div>)
  );
}

export default Article;