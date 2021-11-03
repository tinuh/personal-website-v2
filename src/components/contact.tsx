import React from 'react';
import { Formik, Form } from 'formik';
import publicIp from 'public-ip';
import { store } from 'react-notifications-component';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  } from '@chakra-ui/react';

type contactProps = {
  contact: any,
  setContact: any,
  theme: any,
  styles: any
}

export default function Contact(props: contactProps) {
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
      <Modal isOpen={props.contact} onClose={() => props.setContact(false)} size="md" isCentered>
      <ModalOverlay />   
        <ModalContent>
        <ModalHeader>
          Contact
        </ModalHeader>
        <ModalCloseButton />

        <Formik 
          initialValues={{name: '', email: '', message: ''}}
          onSubmit={(values, {setSubmitting}) => {
            handleSubmit(values);
          }}
        >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            
            <FormControl>
              <Box mb={4}>
                <FormLabel>Full name</FormLabel>
                <Input onChange={handleChange} value={values.name} type="text" name="name" placeholder="Full name" autoComplete="off" isRequired/>
              </Box>
              <Box mb={4}>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleChange} value={values.email} type="email" name="email" placeholder="Email" autoComplete="off" isRequired/>
              </Box>

              <Box mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={values.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Message"
                  autoComplete="off"
                />
              </Box>
            </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button colorScheme="red" onClick={() => props.setContact(false)} disabled={isSubmitting}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>)}
        </Formik>

      </ModalContent>
    </Modal>
        </div>
    )
}