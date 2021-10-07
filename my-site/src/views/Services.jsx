import React, { Component } from 'react'
import ContactCTA from '../components/ContactForm/ContactCTA'

import Fade from 'react-reveal/Fade';

class Services extends Component {
  render() {
    return(
      <div className="services-body">
        <div className="services-banner">
          <h1 className="services-title">What can we bring to your business?</h1>
          <p>Check out some of the ways we can help your business grow its online traffic. Each business has unique needs and we love that. Before engaging in our services our experts will always hold a consultation in order to better understand how we fit into your business growth strategy.</p>
        </div>
        <div className="main-content">

        </div>
        <ContactCTA />
      </div>
    )
  }
}

export default Services