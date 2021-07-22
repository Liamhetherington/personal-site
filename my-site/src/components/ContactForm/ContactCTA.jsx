import React, { Component } from 'react'
import { Button } from '../Navbar/Button'
import ContactImg from '../SVGs/ContactCTAImage'

class ContactCTA extends Component {
  render() {
    return(
      <div className="contact-cta">
        <div className="contact-cta-content">
          <h3 className="cta-title">Grow your online presence</h3>
          <h5 className="cta-subtitle">Let our expert team help build your web branding so you can focus on running your business.</h5>
          <a href="/contact">
            <Button> Start Today</Button>
          </a>
        </div>
        <ContactImg />
      </div>
    )
  }
}

export default ContactCTA;