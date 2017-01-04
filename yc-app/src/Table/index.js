import React from 'react';
import './styles.css';

export default function Table(props) {
	const { className, data } = props;
	let rendered = data();
	let parsed = rendered.map(function(item) {
		console.log(item)
		return item;
	})
	return (
		<table className={className}>
			  <tbody>
			    <tr>
			      <td>
			     {parsed}
			      </td>
			    </tr>
			  </tbody>
		</table>
	)
}

