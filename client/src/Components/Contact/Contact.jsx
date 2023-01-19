import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_im0d90f',
        'template_ejwf8pc',
        form.current,
        '5pfp7hPHP5HnvqwJ0'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact us</span>
          <div
            className="blur s-blur1"
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required={true}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required={true}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required={true}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for contacting us :)'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
