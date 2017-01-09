import React from 'react';
import Button from '../Button';
import Nav from '../Nav';
import Logo from '../Logo';
import Search from '../Search';
import './styles.css';

export default function Banner(props) {
	//const { prop1, prop2 } = props;
	return (
		<div className="banner">
			<Nav left={<Logo />} right/>
			<div className="flex-container flex-center">
			 	<div className="banner-inner grid-90">
					<div className="banner-title section-title">AFFORDABLE YOGA IN NYC</div>
					<h6 className="banner-subtitle">A calendar of <strong>free, donation-based, and low-cost</strong> yoga and meditation classes* in New York City. </h6>
					<p>*<strong>Disclaimer: </strong>Check the studio’s schedule before attending a class. Class times, days, or prices may change!</p>
					<div className="flex-container flex-center">
						<Button className="button-margin button-primary">Add a Class</Button>
						<Button className="button-primary">Submit a Correction</Button>
					</div>
				</div>
			</div>
	</div>
	)
}
