import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
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
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-item">
        <label htmlFor="message">Please leave a short description of what you are looking to accomplish</label>
        <textarea id="message" required />
      </div>
      <button type="submit" className="form-item btn btn--primary btn--medium" id="contact-submit">Get in touch</button>
    </form>
  );
};

export default ContactForm;