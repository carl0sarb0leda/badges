import React from 'react';
import header from '../images/badge-header.svg';
import ava from '../images/logo.svg'
import '../styles/Badge.css';

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={header} alt="mini header" />
				</div>
				<div className="Badge__section-name">
					<img
						className="Badge__avatar"
						src={ava}
						alt="avatar"
					/>
					<h1>
						Chikorita<br />Arcoiris
					</h1>
				</div>
				<div className="Badge__section-info">
					<p>Frontend Engineer</p>
					<p>@carlosaepn</p>
				</div>
				<div className="Badge__footer">#carl0sarb0leda</div>
			</div>
		);
	}
}

export default Badge;
