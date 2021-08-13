import React, { Component } from 'react'
import ContactCTA from '../components/ContactForm/ContactCTA'
import HomeHero from '../components/SVGs/HomepageBanner'
import { Button }from '../components/Navbar/Button'

import Fade from 'react-reveal/Fade';

import AboutImg from '../assets/about-banner.jpg'
import GAGif from '../assets/2021-07-06 19.45.38.gif'
import CastGif from '../assets/2021-07-22 22.47.10.gif'

import CMSImg from '../components/SVGs/CMSImg'
import SEOImg from '../components/SVGs/SEOImg'
import AnalyticsImg from '../components/SVGs/AnalyticsImg'
import ReactImg from '../components/SVGs/ReactImg'

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

          
            <div className="services-section">
            <div className="services-content">
              <Fade bottom duration={3000}>
                <h2>How are we going to help?</h2>
                <p>Here are just some of the ways we can help your business increase traffic.</p>
                <a href="/services">
                  <Button>View All Our Services</Button>
                </a>
              </Fade>
                
              <div className="service-cards">
                <Fade left duration={2000}>
                  <div className="service-card">
                    <ReactImg />
                    <h3>React Development</h3>
                    <p>Over 95% of websites today are built using JavaScript. React is a leading JavaScript framework created by facebook in order to improve speed, performance, and flexibility of web and mobile applications. This website is built entirely with a React front end! If you have a website, or application in mind that you would like built with React we are here to help!</p>
                  </div>
                </Fade>
                <Fade left duration={2000}>
                  <div className="service-card">
                    <CMSImg />
                    <h3>Content Management Systems</h3>
                    <p>Let us build you a new content management system(CMS). Using either WordPress or Drupal, we will build a turnkey CMS website that allows you to create pages and posts, update images and content, and view user analytics.</p>                    
                  </div>
                </Fade>
                <Fade left duration={2000}>
                  <div className="service-card">
                    <SEOImg />
                    <h3>Search Engine Optimization</h3>
                    <p>Let us build you a new content management system(CMS). Using either WordPress or Drupal, we will build a turnkey CMS that allows you to create pages and posts, update images and content, and view user analytics.</p> 
                  </div>
                </Fade>  
                <Fade left duration={2000}>
                  <div className="service-card">
                    <AnalyticsImg />
                    <h3>Web Analytics</h3>
                    <p>Learn more about your users and what they are doing on your site. Understand where traffic is coming from in order to target marketing campaigns and how to nurture visitor growth.</p> 
                  </div>
                </Fade>
              </div>            
              </div>    
            </div>

          
            <div className="work-section">
              <div className="work-content">
                <Fade bottom duration={3000}>
                  <h2>Work</h2>
                  <p>Take a look at some of our previous projects.</p>
                </Fade>
                
                <div className="work-samples">
                  <Fade left duration={3000}>
                    <div className="project-sample">            
                      <img alt="work sample GIF" src={GAGif} />                   
                      <div className="project-description">
                        <a href="/projects#genuine-athletics">
                          <h3>Genuine Athletics</h3>
                        </a>
                        <p>This athletic training website is built with WordPress. It uses a child theme and a responsive mobile design for theming. Integrations include Elementor editor, Mailchimp, and WooCommerce.</p>
                      </div>      
                  </div>
                   <div className="project-sample">            
                      <img alt="work sample GIF" src={CastGif} />                   
                      <div className="project-description">
                        <a href="/projects#cast">
                          <h3>Cast.</h3>
                        </a>
                        <p>Cast. is a podcast sharing platform built with React.js. The idea behind Cast. is to allow users to find communities of listeners with similar interests and spark conversations over all different types of podcasts episodes. Think of it as a book club for podcasts. We use API queries to allow users to search for podcasts by name, artist, or category.</p>
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