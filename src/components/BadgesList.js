import React from 'react';
import '../styles/BadgesList.css';
import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';
import Modal from './Modal';

//Custom Hook
const useSearchBadges = (badges) => {
	//This is Hooks
	const [ query, setQuery ] = React.useState(''); //query and setQuery === state and setState, just different name
	const [ filteredBadges, setFilteredBadges ] = React.useState(badges);
	React.useMemo(
		() => {
			const result = badges.filter((badge) => {
				return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
			});
			setFilteredBadges(result);
		},
		[ badges, query ]
	);
	return { query, setQuery, filteredBadges };
};

const BadgesList = (props) => {
	const badges = props.dat;

	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	return (
		<div className="BadgesList">
			<div className="form-group">
				<label>Filter Badges</label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(event) => {
						setQuery(event.target.value);
					}}
				/>
			</div>
			{filteredBadges.length === 0 ? (
				<div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create New
					</Link>
				</div>
			) : (
				<ul className="list-unstyled">
					{badges.map((badge) => {
						return (
							<li key={badge.id}>
								<BadgesListItem badge={badge} />
								<div>
									<Link to={`/badges/${badge.id}/edit`}>
										<button className="btn btn-info">Edit</button>
									</Link>
									<div>
										<button
											onClick={() => this.props.onnClick(badge.id)}
											className="btn btn-danger"
										>
											Delete
										</button>
										{/* Modal defined false until complete design in future work */}
										<Modal isOpen={false} />
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default BadgesList;
