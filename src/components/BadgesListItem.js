import React from 'react';
import '../styles/BadgesList.css';

class BadgeListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem">
				<img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt="Avatar" />
				<div>
					<p>
						{this.props.badge.firstName} {this.props.badge.lastName}
					</p>
					<p>{this.props.badge.email}</p>
					<p>{this.props.badge.twitter}</p>
				</div>
			</div>
		);
	}
}
export default BadgeListItem;
