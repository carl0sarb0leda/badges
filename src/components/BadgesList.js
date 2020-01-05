import React from 'react';
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';

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
				{this.props.dat.map((element) => {
					return (
						<div key={element.id}>
							<div className="BadgesListItem">
								<img className="BadgesListItem__avatar" src={element.avatarUrl} alt="Avatar" />
								<div>
									<p>
										{element.firstName} {element.lastName}
									</p>
									<p>{element.email}</p>
									<p>{element.twitter}</p>
								</div>
							</div>
							<br />
						</div>
					);
				})}
			</div>
		);
	}
}

export default BadgesList;
