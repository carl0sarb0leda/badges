import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	if (!props.isOpen) {
		return null;
	}

	return ReactDOM.createPortal(<h1>Hellll</h1>, document.getElementById('modal'));
};

export default Modal;
