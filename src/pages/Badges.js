import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import datas from '../data.json';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
	state = {
		data: datas.people
	};

	render() {
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
							New Badge
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
