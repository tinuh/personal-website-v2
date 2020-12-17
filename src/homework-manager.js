import React from 'react';
import './App.css';
//import Message from "./alert";
import { store } from 'react-notifications-component';

function HomeworkManager() {
  

  React.useEffect(() => {
    document.title = "Homework Manager - Tinu Vanapamula";
    store.addNotification({
      title: "Live Site",
      message: "Click on title to go to the Live Site",
      type: "default",
      insert: "top",
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
    <div className="App">
      {/* <Message type = "info" message = "to view see the live site" dismiss = "5000" link = "http://homework.tinu.tech"/> */}

      <a className="heading" href="http://homework.tinu.tech" target="blank" title="Click to view the live site"><h1 className="heading">The Homework Manager</h1></a>

      <div className="homework-div">
        <h3 className="homework-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Homework Manager is my
          winning app for the <a className='homework-link' target="blank"
                                 href="https://www.congressionalappchallenge.us/">Congressional App Challenge</a> in
          2019 for <a className="homework-link" target="blank" href="https://www.congressionalappchallenge.us/19-MD03">District
            MD-03</a>. I spent over 2 months developing this application on the Python Django Web-Framework. The
          Homework Manager is an app for classrooms to manage homework, reminders, and announcements. Here is the video,
          which shows how this application is used. </h3>
        <div className="video">
          <div className="video-iframe">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_8Q42L5wg6k" title = "Homework Manager Demo" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
        </div>
        <h3 className="homework-text">The inspiration for my app came from the classic agenda book I
          use in school every day. I thought about what would happen if I didn’t have to write down my homework
          every day, and assignments could be available online in a simplistic and organized fashion. Click <a
              className='homework-link' target="blank" href="http://homework.tinu.tech">Here</a> to visit the live site.
          I am still working on developing this application to make it better overtime, that be it at a
          slower pace. From the competition, I have made significant changes to the app by adding the ability to submit response/links. </h3>
      </div><br />
    </div>
  );
}

export default HomeworkManager;
