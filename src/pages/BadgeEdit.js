import React from 'react';
import Badges from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/space-rocket-launch.svg';
//import image can be improved by react components
//import { ReactComponent as RocketIcon } from '../images/space-rocket-launch.svg';
import '../styles/BadgeEdit.css';
import api from '../api';

class BadgeEdit extends React.Component {
	state = {
		loading: true,
		error: null,
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

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async (e) => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({ loading: false, form: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			await api.badges.update(this.props.match.params.badgeId, this.state.form);
			this.setState({ loading: false });
			this.props.history.push('/badges');
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		if (this.state.loading) {
			return `⏳🧐Loading...`;
		}
		return (
			<React.Fragment>
				<div className="BadgeEdit__hero">
					<img src={header} alt="header" />
					{/* <RocketIcon /> */}
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badges formValues={this.state.form} />
						</div>
						<div className="col-6">
							<h1>Edit Attendant</h1>
							<BadgeForm
								onnnChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeEdit;
