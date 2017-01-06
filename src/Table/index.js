import React from 'react';
import moment from 'moment';
import './styles.css';

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(timeslot, i) {
			
			let flexBasis = timeslot[1].length > 1 ? "flex-50" : "flex-100";
			//determine if classbox item child has 'hidden' or 'visible' class
			//make sure you don't animate hidden timeslots!
			let isHidden = "visible";

		return (
			<div className="flex-container row" key={i}>
				<div className="timeslot">
					{moment(timeslot[0].replace(/:/g,''), "hmm").format("h:mm a") }
				</div>
				<div className={"flex-container flex-wrap grid-100 " + isHidden}>
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
			{parsed}
		</div>
	)
}

