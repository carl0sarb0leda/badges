import React from 'react';
import Badges from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import '../styles/BadgeNew.css';

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};
	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};
	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="header" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badges formValues={this.state.form} />
						</div>
						<div className="col-6">
							<BadgeForm onnnChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
