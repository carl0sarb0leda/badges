import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Badges.css';
import confLogo from '../images/badge-header.svg';
//import datas from '../data.json';
import BadgesList from '../components/BadgesList';
import api from '../api';

class Badges extends React.Component {
	constructor(props) {
		super(props);
		console.log(`1, constructor`);
		this.state = {
			loading: true,
			error: null,
			data: undefined
		};
	}

	componentDidMount() {
		console.log(`3, component did mount`);
		// this.timeID = setTimeout(() => {
		// 	this.setState({ data: datas.people });
		// }, 3000);
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({
			loading: true,
			error: null
		});
		try {
			const data = await api.badges.list();
			this.setState({
				loading: false,
				data: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	};
	componentDidUpdate(prevProps, prevState) {
		console.log(`4, componentDidUpdate`);
		console.log({
			prevProps: prevProps,
			prevState: prevState
		});
		console.log({
			actualprops: this.props,
			actualState: this.state
		});
	}
	componentWillUnmount() {
		console.log(`5, componentWillUnmount`);
		clearTimeout(this.timeID); //this is to avoid error and clean memory if setTimeout was not used during the state update
	}

	render() {
		if (this.state.loading === true) {
			return 'Loading...';
		}
		console.log(`2, render`);
		if (this.state.error) {
			return `${this.state.error}`;
		}

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img className="Badges_conf-logo" src={confLogo} alt="Conference Logo" />
						</div>
					</div>
				</div>
				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New
						</Link>
					</div>
				</div>
				<div className="Badges__List">
					<div className="Badges__container">
						<BadgesList dat={this.state.data} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
