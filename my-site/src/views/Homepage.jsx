import React, { Component } from 'react'
import ContactCTA from '../components/ContactForm/ContactCTA'
import HomeHero from '../components/SVGs/HomepageBanner'
import { Button }from '../components/Navbar/Button'

import Fade from 'react-reveal/Fade';

import AboutImg from '../assets/about-banner.jpg'
import WorkGif from '../assets/2021-07-06 19.45.38.gif'

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
            <div className="about-section">
              <div className="about-content">
                <h2>Get to know who you're working with</h2>
                <p>Our small size ensures that we focus on nurturing relationships withour clientele, meeting their exact needs. We provide expert web design and implementation skills using frontrunning technologies to ensure that your site is scalable and consistently healthy.</p>
                <a className="about-btn" href="/about">
                  <Button>Learn More</Button>
                </a>
              </div> 
              
              <div className="about-image">
                <img alt="about us image" src={AboutImg} />
              </div>
              <div className="about-box"></div>
            </div>
          </Fade>

          
            <div className="work-section">
              <div className="work-content">
                <Fade bottom duration={3000}>
                  <h2>Work</h2>
                  <p>Take a look at some of our previous projects.</p>
                </Fade>
                
                <div className="work-samples">
                  <Fade left duration={3000}>
                    <div className="project-sample">            
                      <img alt="work sample GIF" src={WorkGif} />                   
                      <div className="project-description">
                        <a href="/projects#genuine-athletics">
                          <h3>Genuine Athletics</h3>
                        </a>
                        <p>This athletic training website is built with WordPress. It uses a child theme and a responsive mobile design for theming. Integrations include Elementor editor, Mailchimp, and WooCommerce.</p>
                      </div>      
                  </div>
                   <div className="project-sample">            
                      <img alt="work sample GIF" src={WorkGif} />                   
                      <div className="project-description">
                        <a href="/projects#genuine-athletics">
                          <h3>Genuine Athletics</h3>
                        </a>
                        <p>This athletic training website is built with WordPress. It uses a child theme and a responsive mobile design for theming. Integrations include Elementor editor, Mailchimp, and WooCommerce.</p>
                      </div>      
                  </div> 
                    <div className="project-sample">            
                      <img alt="work sample GIF" src={WorkGif} />                   
                      <div className="project-description">
                        <a href="/projects#genuine-athletics">
                          <h3>Genuine Athletics</h3>
                        </a>
                        <p>This athletic training website is built with WordPress. It uses a child theme and a responsive mobile design for theming. Integrations include Elementor editor, Mailchimp, and WooCommerce.</p>
                      </div>      
                    </div> 
                  </Fade>

                </div>
              </div>
            </div>

          <Fade bottom duration={3000}>
            <ContactCTA />
          </Fade>
        </div>
      </div>

    )
  }
}

export default Homepage;