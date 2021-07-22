import React, { Component } from 'react'
import Logo from '../assets/logo-white.png'
import { MenuItems } from './Navbar/MenuItems';

class Footer extends Component {
  render() {
    return(
      <div className="footer-container">
        <div className="logo">
          <img className="footer-logo" alt="footer logo image" src={Logo}/>
        </div>
        <ul className="footer-menu">
					{MenuItems.map((item, index) => {
						return(
						<li key={index} >
							<a className={item.cName} href={item.url}> {item.title} </a>
						</li>
						) 
					})}		
				</ul>
      </div>
    )
  }
}

export default Footer