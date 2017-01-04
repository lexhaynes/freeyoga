import React from 'react';
import './styles.css';

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(timeslot, i) {
		console.log(timeslot)
		return <tr key={i}>
				<th>{timeslot[0]}</th>
				{ timeslot[1].map(function(item, i) {
					return <td key={i}>{item}</td>
				})
				}
				</tr>
	})
	return (
		<table className={className}>
			  <tbody>
			     {parsed} 
			  </tbody>
		</table>
	)
}

