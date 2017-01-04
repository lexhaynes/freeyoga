import React from 'react';
import './styles.css';

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(timeslot, i) {
		//console.log(timeslot)
		/*return <tr key={i}>
				<th>{timeslot[0]}</th>
				{ timeslot[1].map(function(item, i) {
					return <td key={i}>{item}</td>
				})
				}
				</tr>	*/
		return (
			<div className="flex-container" key={i}>
				<strong>{timeslot[0]}</strong>
				<div className="flex-container">
				{ timeslot[1].map(function(item, i) {
					return <span key={i}>{item}</span>
				})
				}
				</div>
			</div>
		)
	});
	/*return (
		<table className={className}>
			  <tbody>
			     {parsed} 
			  </tbody>
		</table>
	)*/
	return (
		<div className={className}>
			{parsed}
		</div>
	)
}

