// import React from 'react';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form } from "react-bootstrap";

const Contact = (e) => {
  const form = useRef();

  const sendEmail = (e) => {
    // const { name, email, password, isMember } = values;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k38eea3",
        "template_86oqgbu",
        form.current,
        "user_GdC2BtUr9zBkGIsv7fVRA"
      )
      .then(
        (result) => {
          alert("Your mail is sent!");
          console.log(result.text);
        },
        (error) => {
            alert('Oops... ' + JSON.stringify(error));
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-50 mx-auto mt-5 pt-5 mb-5 pb-5">
      <h1>Contact Me</h1>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}

      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Enter Name"
            required
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter email"
            required
          />
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>

        <Button variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
