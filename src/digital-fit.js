import React from 'react';
import './App.css';
//import Message from "./alert";
import { store } from 'react-notifications-component';

function DigitalFit() {
  

  React.useEffect(() => {
    document.title = "Digital Fit - Tinu Vanapamula";
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
  }, []);

  return (
    <div className="content">
      {/* <Message type = "info" message = "to view see the live site" dismiss = "5000" link = "http://homework.tinu.tech"/> */}

      <a className="heading" href="http://fit.tinu.tech" target="blank" title="Click to view the live site"><h1 className="heading">Digital Fit</h1></a>

      <div className="homework-div">
        <h3 className="homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Digital Fit is my
          winning app for the <a className='homework-link' target="blank" href="https://www.congressionalappchallenge.us/">Congressional App Challenge</a> in
          2019 for <a className="homework-link" target="blank" href="https://www.congressionalappchallenge.us/20-MD03">District MD-03</a>.
          Welcome to Digital Fit. More than ever, we are spending more and more time on our digital devices. This can have many side effects. 
          The first of which is eye strain, it can be quite damaging for your eyes to focus on a bright screen for a long time. 
          Optometrists recommend following the 20-20-20 rule, which is to look away from our screen every 20 minutes, for 20 seconds at something that is 20 feet in the distance. 
          Furthermore, working at a desk for a long time can cause chronic health problems. 
          That is why it is important to keep our body active and work while maintaining proper ergonomics. 
        </h3>
        <div className="video">
          <div className="video-iframe">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b3GnPWRpQjI" title = "Digital Fit Demo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </div>
        <h3 className="homework-text">
            Digital Fit is a brand new web application built on the react.js framework. 
            This application does not use a database and all of your data will be safely secured on your own computer. 
            It allows you to set reminders for eye-breaks which help prevent eye strain, move breaks to help prevent inactivity, and water breaks to keep yourself hydrated. 
            The tools tab provides important tools which includes the breathing exercise, ergonomics lesson, and exercises that you can do right at your desk. 
            The statistics tab on the right will record every session in which you are working and allows you download, and filter through that data. 
            This can be helpful when you want to get a sense of how long you work each day.
            Click <a className='homework-link' target="blank" href="http://fit.tinu.tech">Here</a> to visit the live site.
        </h3>
      </div><br />
    </div>
  );
}

export default DigitalFit;