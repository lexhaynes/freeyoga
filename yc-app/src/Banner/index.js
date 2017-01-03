import React from 'react';
import Button from '../Button';
import './styles.css';

export default function Banner(props) {
	//const { prop1, prop2 } = props;
	return (
		<div className="banner">
			<nav className="nav flex-container flex-center">
				<div className="nav-inner grid-90 flex-container flex-space-between">
					<div className="nav-left">
						<a href="/" className="logo">Yoga<strong>Community</strong></a>
					</div>
					<div className="nav-right">
						<div className="search">
							<Button className="button-icon fa fa-search"></Button>
						</div>
					</div>
				</div>
			</nav>
			<div className="flex-container flex-center">
			 	<div className="banner-inner grid-90">
					<div className="banner-title section-title">AFFORDABLE YOGA IN NYC</div>
					<h6 className="banner-subtitle">A calendar of <strong>free, donation-based, and low-cost</strong> yoga and meditation classNamees* in New York City. </h6>
					<p>*<strong>Disclaimer: </strong>Check the studio’s schedule before attending a className. Class times, days, or prices may change!</p>
					<div className="flex-container flex-center">
						<Button className="button-margin button-primary">Add a Class</Button>
						<Button className="button-primary">Submit a Correction</Button>
					</div>
				</div>
			</div>
	</div>
	)
}
