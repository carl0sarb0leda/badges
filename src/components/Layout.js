import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
	return (
		<React.Fragment>
			<NavBar />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;
