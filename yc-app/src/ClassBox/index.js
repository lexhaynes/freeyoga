import React from 'react';
import './styles.css';

export default function ClassBox(props) {
	const { type, classTitle, classTime, classTeacher, classLocation } = props;
	let component = type === "today" ?
		//if the component type is 'today' section
		<div className="classbox">
	  		<div className="class-title">{classTitle}</div>
	  		<div className="class-time">{classTime}</div>
	  		<div className="class-teacher">{classTeacher}</div>
	  		<a href="#" className="class-location">{classLocation}</a>
	  	</div>
	  	:
		//if the component type is 'calendar' section
		<div className="classbox">
  			<div className="class-title">{classTitle}</div>
	  		<div className="class-time">{classTime}</div>
	  		<div className="class-teacher">{classTeacher}</div>
	  		<a href="#" className="class-location">{classLocation}</a>
	  	</div>;
	
	return component;
	
}
