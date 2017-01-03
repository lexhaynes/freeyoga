import React, { Component } from 'react';
import Button from '../Button'
import ClassBox from '../ClassBox'
import Table from '../Table'
import './styles.css';


var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var date = new Date();
var today = days[date.getDay()];

class ClassesToday extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      	classesToday: [],
	    };
	    this.getTodaysClasses = this.getTodaysClasses.bind(this);
	}

	getTodaysClasses() {
		return this.props.data.map(function(item, i) {
			if (item.day === today) {
				return (<ClassBox key={i}
			  		classTitle={item.className}
			  		classTime={item.classStart}
			  		classTeacher={item.teacher} 
			  		classLocation={item.studio}
				 />)
			}
		});
	}

	render() {
		return (
			<div className="section today grid-90 grid-center">
				<div className="section-header flex-container flex-space-between">
					<Button className="button-navigation"><span className="fa fa-angle-double-left"></span> Yesterday</Button>
					<div className="section-title">Today's Classes</div>
					<Button className="button-navigation">Tomorrow <span className="fa fa-angle-double-right"></span></Button>
				</div>

				<div className="section-content slider">
					<Table
						className="grid-100 grid-center"
						data={this.getTodaysClasses}  
					/>
				</div>
			</div>
		);
	}
}

export default ClassesToday;