import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';

const container = document.getElementById('root'); //root is from index.html

// ReactDOM.render(What to render, Where to render it);

ReactDOM.render(<App />, container);
