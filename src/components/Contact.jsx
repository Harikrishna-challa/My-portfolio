import React, { useRef, useEffect } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init('aCY0DdJ2J5jEce_nj'); // Replace with your actual Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uauovz', 'template_u2ap15e', form.current)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Email Sent Successfully!');
        e.target.reset();
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send the email. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className='full-screen'>
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" name="from_name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" name="from_email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-contact">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
