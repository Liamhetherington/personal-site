import React, { Component } from 'react'
import ContactCTA from '../components/ContactForm/ContactCTA'
import HomeHero from '../components/SVGs/HomepageBanner'
import Fade from 'react-reveal/Fade';

class Homepage extends Component {

  render() {
    return(
      <div className="home-body">
        <div className="hero-banner">
          <div className="hero-content">
            <h1 className="hero-title">Scalable web solutions, front to back.</h1>
            <br/>
            <h3 className="hero-subtitle">Design. Development. Analytics.</h3>
            <div className="hero-box"></div>
            <div className="hero-box-2"></div>
          </div>
          <HomeHero />
        </div>


        <div className="home-main">

          <Fade bottom duration={3000}>
            <div className="mission-statement">
              <h2>What is our approach?</h2>
              <p>At NxNE Web Solutions, we believe in creating healthy websites and web applications for your business. We encompass design, user experience, performance, and SEO best practices in order to create a web presence with an impact.</p>
            </div>
          </Fade>

          <Fade bottom duration={3000}>
            <ContactCTA />
          </Fade>
        </div>
      </div>

    )
  }
}

export default Homepage;