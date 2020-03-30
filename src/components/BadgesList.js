import React from 'react';
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';
import Modal from './Modal';

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
						<div key={badge.id}>
							<li>
								<BadgesListItem badge={badge} />
							</li>
							<div>
								<Link to={`/badges/${badge.id}/edit`}>
									<button className="btn btn-info">Edit</button>
								</Link>
								<div>
									<button onClick={() => this.props.onnClick(badge.id)} className="btn btn-danger">
										Delete
									</button>
									<Modal isOpen={false} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default BadgesList;
