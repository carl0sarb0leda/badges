import React from 'react';
import '../styles/BadgesList.css';

class BadgesList extends React.Component {
	render() {
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
