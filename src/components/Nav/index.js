import React from 'react';
import './styles.css';

export default function Nav(props) {
	const { left, right } = props;
	return (
		<nav className="nav flex-container flex-center">
			<div className="nav-inner grid-90 flex-container flex-space-between">
				<div className="nav-left">
					{left}
				</div>
				<div className="nav-right">
					{right}
				</div>
			</div>
		</nav>
	)
}
