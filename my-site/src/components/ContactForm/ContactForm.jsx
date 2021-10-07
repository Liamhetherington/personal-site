import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, company } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      company: company.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>We'd love to hear from you</h2>
        <p>No matter what you're looking for, when it comes to web, we're here to help. Get in touch with us to set up a free consultation call.</p>
        <div className="contact-name">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name*" required />
        </div>
        <div className="contact-email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email*" required />
        </div>
        <div className="contact-company">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" placeholder="Company/Organization" />
        </div>
        <div className="contact-message">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Please leave a short message about your project or idea*" required />
        </div>
        <button className="contact-btn btn btn--primary btn--medium" type="submit">{status}</button>
      </form>
    </div>
    
  );
};

export default ContactForm;