import React from 'react';
import moment from 'moment';
import './styles.css';

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(timeslot, i) {
		console.log(timeslot[0].replace(/:/g,''));
		return (
			<div className="flex-container row" key={i}>
				<div className="timeslot">
					{moment(timeslot[0].replace(/:/g,''), "hmm").format("h:mm a") }
				</div>
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

