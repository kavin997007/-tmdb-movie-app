import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Index.css";

const Index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cz23eb9', 'template_bznvtjp', form.current, {
        publicKey: 'YkBD8oNo9duNthJXT',
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />

      <label>Email</label>
      <input type="email" name="user_email" required />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Index;