import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import publicIp from 'public-ip';
import { store } from 'react-notifications-component';

export default function Contact(props) {
  const webhook = require("webhook-discord");
  const Airtable = require("airtable");

  const Hook = new webhook.Webhook(process.env.REACT_APP_DISCORD_WEBHOOK_URI);

  const handleSubmit = async(data) => {
    data.ip = await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip']
    });

    console.log(data)

    //Post Data to airtable
    let base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base('appj7u8nrwKWHIEdc');

    await base('Contact').create([
      {
        "fields": {
          "Full Name": data.name,
          "Email": data.email,
          "Message": data.message,
          "IP Address": data.ip,
          "Status": "Todo",
        }
      }
    ], async function(err, records) {
      if (err) {
        console.error(err);

        await store.addNotification({
          title: "API Error",
          message: "Contact Form Not Submitted",
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

        return;
      }
      records.forEach(async function (record) {
        let id = await record.getId();

        let msg = await new webhook.MessageBuilder()
        .setName(data.name)
        .setColor("#158574")
        .setTitle(`Contact Submission By ${data.name}`)
        .setURL(`https://airtable.com/tblxKpYsvjPeDAQQb/viwxKNTUhWNTlgQwt/${id}?blocks=hide`)
        .addField('Email', data.email)
        .addField('Message', data.message)
        .addField('IP', `||${data.ip}||`)
    
        if (data.other) await msg.addField('Message', data.message);

        await Hook.send(msg);

        await store.addNotification({
          title: "Success",
          message: "Contact Form Submitted.",
          type: "success",
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
      });
    });
    
    props.setContact(false);

  };

    return (
        <div>
            <Modal
            show = {props.contact}
            onHide = {() => props.setContact(false)}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <div style = {props.theme === "dark" ? {backgroundColor: "#222"} : {backgroundColor: "#ffffff"}}>
              <Formik 
                initialValues={{name: '', email: '', message: ''}}
                onSubmit = {(values, {setSubmitting}) => {
                  handleSubmit(values);
                }}
              >
                {({values, errors, tocuhed, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                  <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter" style = {props.theme === "dark" ? {color: "#ffffff"} : {color: "#222"}}>
                        Contact
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className = "row">
                        <div className = "col-md-6">
                          <TextField onChange = {handleChange} value = {values.name} onBlur = {handleBlur} label = "Full Name" name = "name" type = "text" variant = "outlined" style = {props.styles.input} required/>
                        </div><br/><br/><br/>
                        <div className = "col-md-6">
                          <TextField onChange = {handleChange} value = {values.email} onBlur = {handleBlur} label = "Email" name = "email" type = "email" variant = "outlined" style = {props.styles.input} required/>
                        </div><br/><br/><br/>
                        <div className = "col-md-12">
                          <TextField onChange = {handleChange} value = {values.message} onBlur = {handleBlur} multiline rowsMax={6} rows= {4} label = "Message" name = "message" type = "text" variant = "outlined" style = {props.styles.input} required/>
                        </div>
                      </div>
                      
                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant = "outline-success" disabled={isSubmitting}>Submit</Button>
                      <Button type = "button" onClick={() => props.setContact(false)} variant = "outline-danger">Cancel</Button>
                    </Modal.Footer>
                  </form>)}
              </Formik>
            </div>
          </Modal>
        </div>
    )
}
