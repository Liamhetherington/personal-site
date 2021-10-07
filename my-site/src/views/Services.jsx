import React, { Component } from 'react'
import ContactCTA from '../components/ContactForm/ContactCTA'

import Fade from 'react-reveal/Fade';

class Services extends Component {
  render() {
    return(
      <div className="services-body">
        <div className="services-banner">
          <h1 className="services-title">Where our solutions meet your challenges</h1>
        </div>
       
        <div className="services-grid">
          <div className="services-block" id="design"> 
            <h4>Design</h4>
          </div>
          <div className="services-block" id="content-management"> 
            <h4>Content Management Systems</h4>
          </div>
          <div className="services-block" id="integrations"> 
            <h4>Integrations</h4>
          </div>
          <div className="services-block" id="react"> 
            <h4>React Development</h4>
          </div>
        </div>
        <div className="services-block-outter" id="traffic-analytics"> 
            <h4>SEO, Traffic & Analytics</h4>
        </div>
        {/* <ContactCTA /> */}
      </div>
    )
  }
}

export default Services