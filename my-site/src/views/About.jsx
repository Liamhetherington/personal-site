import React, { Component } from 'react'
import LiamIMG from '../assets/liam-headshot.png'

class AboutPage extends Component {
  render() {
    return(
      <div className="about-body">
        <div className="about-banner">
          <div className="about-banner-text">
            <h1 className="hero-title">Who is NxNE Web Solutions?</h1>
            <p>We are a results driven technical solutioning team that will help your brand build it's online presence. Our mission is to provide clean and concise code driving higher conversion and lead rates. In order to achieve these results we use a wide skillset of SEO keyword and metadata implementation, mobile responsive design, React frontend development, and Wordpress/Drupal Content Management Systems.</p>
          </div>
        </div>
        <div className="team-section">
          <h2 className="team-title">Meet our team</h2>
          <div className="liam-section">
            <div className="team-member-text">
              <h3>Liam Hetherington</h3>    
              <p>
                Liam is the founder and lead developer here at NxNe Web Solutions. His experience with React, Drupal, and Wordpress compliment the problem solving and solutioning skills he brings to the table.   
              </p>
            </div>   
            <img className="liam-photo" alt="headshot of founder Liam Hetherington" src={LiamIMG} />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage