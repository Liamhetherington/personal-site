import React, { Component } from 'react'
import ContactForm from '../components/ContactForm/ContactForm';


class ContactPage extends Component {
  render() {
    return(
      <div className="services-body">
        <div className="services-banner">
          <h1 className="services-title">Tell us about your business</h1>
        </div>
          <div className="main-content">
            <ContactForm />
          </div>
      </div>
    )
  }
}

export default ContactPage