import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import Logo from '../../assets/logo-white.png'

class Navbar extends Component {
	state = { clicked: false }

	handClick = () => {
		this.setState({ clicked: !this.state.clicked})
	}

	render() {
		return(
			<nav className="navbar-container">
				<img src={Logo} alt="logo" className="navbar-logo"/>
				<div className="menu-icon" onClick={this.handClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return(
						<li key={index} >
							<a className={item.cName} href={item.url}> {item.title} </a>
						</li>
						) 
					})}		
				</ul>
				<Button>Contact</Button>
			</nav>
  )
 }
}

export default Navbar;