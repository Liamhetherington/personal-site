import React, { useState } from "react";
import ContactInfo from './ContactStep1';
import ContactService from './ContactStep2';
import ContactNotes from './ContactStep3';

class ContactForm extends React.Component {
   state = {
    step: 1,
    companyName: "",
    name: "",
    email: "", 
    service: "",
    notes: ""
   }
  
  // process to next step
  next = () => {
    // update state.step by adding to previous state
    this.setState(prevState => {
      return {step: prevState.step + 1
    }})
  }

  // process to previous step
  back = () => {
    // update state.step by minus 1 from previous state
    this.setState(prevState => {
      return {step: prevState.step - 1
    }})
  }

  //handle all the field changes
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
    console.log(this.state)
  }

  //handle form submit
  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, notes } = values;
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

  // const [status, setStatus] = useState("Submit");
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };
  
  // return (
  //   <form onSubmit={handleSubmit} className="contact-form">
  //     <div className="form-item">
  //       <label htmlFor="name">Name</label>
  //       <input type="text" id="name" required />
  //     </div>
  //     <div className="form-item">
  //       <label htmlFor="email">Email</label>
  //       <input type="email" id="email" required />
  //     </div>
  //     <div className="form-item">
  //       <label htmlFor="message">Please leave a short description of what you are looking to accomplish</label>
  //       <textarea id="message" required />
  //     </div>
  //     <button type="submit" className="form-item btn btn--primary btn--medium" id="contact-submit">Get in touch</button>
  //   </form>
  // );
  render() {
    const { step } = this.state
    const { companyName, name, email, service } = this.state
    const values = { companyName, name, email, service }

    switch (step) {
      case 1:
        return (
            <ContactInfo
              values={values}
              handleChange={this.handleChange}
              next={this.next}
            />
        )
      case 2:
        return (
            <ContactService
              values={values}
              handleChange={this.handleChange}
              back={this.back}
              next={this.next}
            />
        )
      case 3:
        return (
            <ContactNotes
              values={values}
              handleChange={this.handleChange}
              back={this.back}
              next={this.next}
              handleSubmit={this.handleSubmit}
            />
        )
    }
  }

};

export default ContactForm;