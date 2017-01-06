import React from 'react';
import moment from 'moment';
import Button from '../Button';
import './styles.css';

function showClasses() {
	console.log('show hidden classes');
}

export default function Table(props) {
	const { className, data, isClassOver } = props;
	let rendered = data();

	let parsed = rendered.map(function(timeslot, i) {
			
			let flexBasis = timeslot[1].length > 1 ? "flex-50" : "flex-100";
			let isHidden = isClassOver(moment(timeslot[0].replace(/:/g,''), "hmm").format("Hmm") ) ? "hidden" : "visible";

		return (
			<div className={"flex-container row " + isHidden} key={i}>
				<div className="timeslot">
					{moment(timeslot[0].replace(/:/g,''), "hmm").format("h:mm a") }
				</div>
				<div className="flex-container flex-wrap grid-100">
				{	timeslot[1].map(function(item, y) {
						return <div className={flexBasis} key={y}>{item}</div>
					})
				}
				</div>
			</div>
			
		)
	});
	return (
		<div className={className}>
			<Button className="flex-container grid-center" onClick={showClasses}>Show Hidden</Button>
			{parsed}
		</div>
	)
}

