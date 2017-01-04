import React from 'react';
import './styles.css';

function friendlyTime(time) {
	let friendly = time;
	
	return friendly;
}

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(timeslot, i) {
		return (
			<div className="flex-container row" key={i}>
				<div className="timeslot">{friendlyTime(timeslot[0])}</div>
				<div className="flex-container grid-100">
				{ timeslot[1].map(function(item, i) {
					return <div className="grid-100" key={i}>{item}</div>
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

