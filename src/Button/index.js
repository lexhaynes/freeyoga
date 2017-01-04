import React /*, { Component }*/ from 'react';
import './styles.css';

export default function Button(props)  {
	const {onClick, children, className} = props;
	return (
		<button type="button" className={className} onClick={onClick}>{children}</button>
	)
}
