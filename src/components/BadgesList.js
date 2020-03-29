import React from 'react';
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';

class BadgesList extends React.Component {
	render() {
		if (this.props.dat.length === 0) {
			return (
				<div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create New
					</Link>
				</div>
			);
		}
		return (
			<div>
				{this.props.dat.map((badge) => {
					return (
						<li key={badge.id}>
							<Link to={`/badges/${badge.id}/edit`}>
								<BadgesListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</div>
		);
	}
}

export default BadgesList;
