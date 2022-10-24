/* eslint-disable react/jsx-no-target-blank */
// import React from "react";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s35sszr",
        "template_0orvi5y",
        form.current,
        "_MvBJGzJqw-gTXoY0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Rachapudijagadeesh9580@gmail.com</h5>
            <a href="mailto:Rachapudijagadeesh9580@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jagadeesh Rachapudi</h5>
            <a href="https://m.me/jummangi111" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+916304823148</h5>
            <a href="http://wa.me/+916304823148" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OFTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            required
          />
          <input type="email" name="email" placeholder="Your Email " required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
