import React from 'react';
import header from '../images/badge-header.svg';
import ava from '../images/logo.svg';
import '../styles/Badge.css';

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={header} alt="mini header" />
				</div>
				<div className="Badge__section-name">
					<img className="Badge__avatar" src={ava} alt="avatar" />
					<h1>
						{this.props.formValues.firstName}
						<br />
						{this.props.formValues.lastName}
					</h1>
				</div>
				<div className="Badge__section-info">
					<p>{this.props.formValues.jobTitle}</p>
					<p>{this.props.formValues.email}</p>
				</div>
				<div className="Badge__footer">{this.props.formValues.twitter}</div>
			</div>
		);
	}
}

export default Badge;
