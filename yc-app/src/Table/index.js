import React from 'react';
import './styles.css';

export default function Table(props) {
	const { className, headers, data } = props;
	return (
		<table className={className}>
			  <thead>
			    <tr>
			      {headers}
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>
			      {data()}
			      </td>
			    </tr>
			  </tbody>
		</table>
	)
}

