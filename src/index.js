import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Badges from './components/badge';
import './index.css';

const element = (
	<div>
		<App />
		<Badges />
	</div>
);
const container = document.getElementById('root');

ReactDOM.render(element, container);
