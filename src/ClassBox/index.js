import React from 'react';
import './styles.css';
import moment from 'moment';

export default function ClassBox(props) {
	const {title, start, end, teacher, location, hood, coords, url } = props;
	let component = 
		//if the component type is 'today' section
		<div className="classbox animate">
	  		<div className="class-title">{title}</div>

	  		<a href={url} className="class-location" target="blank">{location}</a>

	  		<div className="class-field"><strong className="label">Neighborhood:</strong> {hood}</div>

	  		<div className="class-field"><strong className="label">Class Duration:</strong>{moment(start.replace(/:/g,''), "hmm").format("h:mm a")} - {moment(end.replace(/:/g,''), "hmm").format("h:mm a")}</div>

	  		<div className="class-field"><strong className="label">Teacher:</strong>  {teacher}</div>

	  		<a href={"https://www.google.com/maps/place/" + location  + "/@" + coords + ",13z"} className="class-location" target="blank">See on Map</a>
	  	</div>;
	
	return component;
	
}
