import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../images/logo.svg';

class NavBar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="Navbar__links">
					<Link className="Navbar__brand" to="/">
						<img className="Navbar__brand-logo" src={logo} alt="logo" />
						<span className="font-weight-bold">Home 🥝</span>
					</Link>
					<Link className="Navbar__brand" to="/badges">
						<span className="font-weight-bold">People 😎</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default NavBar;
