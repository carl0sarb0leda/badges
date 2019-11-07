import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App'; //Default component
import Badges from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

const element = (
	<div>
		{/* <App /> */}
		<Badges />
	</div>
);
const container = document.getElementById('root');

ReactDOM.render(element, container);
