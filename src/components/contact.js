import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import axios from 'axios';
import publicIp from 'public-ip';
import { store } from 'react-notifications-component';

export default function Contact(props) {

    //Contact Form Submit
  async function handleSubmit(values) {
    const data = values;
    /* const headers = {
      'Access-Control-Allow-Origin': "*"
    } */
    
    data.ip = await publicIp.v4({
        fallbackUrls: ['https://ifconfig.co/ip']
    });
    
    console.log(data)

    await axios.post('https://send.pageclip.co/iBMnJYTO8tl34tNZqdwFebauCzAONJoF/contact', data)
      .then(function (response) {
        console.log(response)
        props.setContact(false);
        console.log('sub');
        
        store.addNotification({
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
      })
      .catch(function (error) {
        console.log(error)
        props.setContact(false);
        console.log('fail');
        
        store.addNotification({
          title: "Success",
          message: "Contact Form Submitted",
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

        /* store.addNotification({
          title: "API Error",
          message: "Form not submitted",
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
        }); */
      })
    
  }

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