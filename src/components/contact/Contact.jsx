import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <span className="contact__subtitle">Get In Touch</span>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            className="contact__option"
            href="mailto:sendhyboedhisatriya@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxs-envelope contact__option-icon"></i>

            <h4>Email</h4>
          </a>
          <a
            className="contact__option"
            href="https://api.whatsapp.com/send?sendhy=8562985589&text=Hi%2C%20Sendhy.."
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp-square contact__option-icon"></i>
            <h4>WhatsApp</h4>
          </a>
          <a
            className="contact__option"
            href="https://m.me/mas.sendhy"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-messenger contact__option-icon"></i>

            <h4>Messenger</h4>
          </a>
        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="your message here"
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
