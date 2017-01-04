import React from 'react';
import './styles.css';

export default function ClassBox(props) {
	const {title, start, end, teacher, location, coords, url } = props;
	let component = 
		//if the component type is 'today' section
		<div className="classbox animate">
	  		<div className="class-title">{title}</div>

	  		<a href={url} className="class-location" target="blank">{location}</a>

	  		<div className="class-time"><strong className="label">Class Duration :</strong>{start} - {end}</div>

	  		<div className="class-teacher"><strong className="label">Teacher :</strong>  {teacher}</div>

	  		<a href={"https://www.google.com/maps/place/" + location  + "/@" + coords + ",13z"} className="class-location" target="blank">See on Map</a>
	  	</div>;
	
	return component;
	
}
