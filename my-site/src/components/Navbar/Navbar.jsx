import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';

class Navbar extends Component {
	state = { clicked: true }

	handClick = () => {
		this.setState({ clicked: !this.state.clicked})
	}

	render() {
		return(
			<nav className="navbar-container">
				<h1 className="navbar-logo">NxNE Web Solutions<i className="fab fa-react"></i></h1>
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