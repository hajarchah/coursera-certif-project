import React, { useRef } from "react";
import "./contact.css";

class RecycleObject extends React.Component {
  render() {
    return this.props.name;
  }
}

function Contact() {
  const messageRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Send Form!", e);

    const newElement = document.createElement("div");
    newElement.textContent =
      "Thank you for contacting us! We will get back to you soon.";

    messageRef.current.appendChild(newElement);
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Contact Us! <br />
            </p>
            <p className="separator" />
          </div>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
          <div ref={messageRef}></div><br/>
          Contact us if you want to recycle your:
          <div>
            <RecycleObject name="Sofa!" />
            <br />
            <RecycleObject name="Cabinets!" />
            <br />
            <RecycleObject name="Junk!" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
