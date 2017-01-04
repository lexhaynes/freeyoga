import React from 'react';
import './styles.css';

export default function ClassBox(props) {
	const { type, classTitle, classTime, classTeacher, classLocation, coords, url } = props;
	let component = type === "today" ?
		//if the component type is 'today' section
		<div className="classbox">
	  		<div className="class-title">{classTitle}</div>
	  		<div className="class-time">{classTime}</div>
	  		<div className="class-teacher">{classTeacher}</div>
	  		<div>
	  			<a href={url} className="class-location" target="blank">{classLocation}</a>
	  		</div>

	  		<div>
	  			<a href={"https://www.google.com/maps/place/" + classLocation  + "/@" + coords + ",13z"} className="class-location" target="blank">See on Map</a>
	  		</div>
	  	</div>
	  	:
		//if the component type is 'calendar' section
		<div className="classbox">
  			<div className="class-title text-capitalize">{classTitle}</div>
	  		<div className="class-time">{classTime}</div>
	  		<div className="class-teacher">{classTeacher}</div>
	  		<a href="#" className="class-location">{classLocation}</a>
	  	</div>;
	
	return component;
	
}
