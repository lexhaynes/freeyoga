import React, { Component } from 'react';
import Button from '../Button'
import ClassBox from '../ClassBox'
import Table from '../Table'
import './styles.css';


var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var date = new Date();

class ClassesToday extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	currentDay: date.getDay(),
	      	currentClasses: [],
	    };
	    this.getTodaysClasses = this.getTodaysClasses.bind(this);
	    this.getCurrentClasses = this.getCurrentClasses.bind(this);
	    this.nextDay = this.nextDay.bind(this);
	    this.prevDay = this.prevDay.bind(this);
	}

	componentDidMount() {
		//fetch data here in the future
		this.getCurrentClasses(this.state.currentDay);
	}

	getCurrentClasses(currentDay) {
		// functional syntax equivalent to the above.
		// ensures we don't get empty values in state.currentClasses array
		let currentClasses = this.props.data
			.filter( item => item.day === days[currentDay] )
			.map( (item, i) => item );
	
		this.setState({
			'currentClasses': currentClasses,
		});
	}

	getTodaysClasses() {
		let _this = this;
		return this.state.currentClasses.map(function(item, i) {
			return (<ClassBox key={i}
		  		classTitle={item.className}
		  		classTime={item.classStart}
		  		classTeacher={item.teacher} 
		  		classLocation={item.studio}
			 />)
		});
	}

	nextDay() {
		let nextDay = this.state.currentDay === 6 ? 0 : this.state.currentDay + 1;
		this.setState({
			'currentDay': nextDay
		});
		this.getCurrentClasses(nextDay);
	}	
	prevDay() {
		let prevDay = this.state.currentDay === 0 ? 6 : this.state.currentDay - 1;
		this.setState({
			'currentDay': prevDay
		});
		this.getCurrentClasses(prevDay);
	}

	render() {
		//this.parseData();

		return (
			<div className="section today grid-90 grid-center">

				<div className="section-header flex-container flex-space-between">
					<Button className="button-navigation" onClick={this.prevDay}>
						<span className="fa fa-angle-double-left"></span> Yesterday
					</Button>

					<div className="section-title"> {this.state.currentDay} <span className="title-day">{days[this.state.currentDay]}'s</span> Classes</div>

					<Button className="button-navigation" onClick={this.nextDay}>
						Tomorrow <span className="fa fa-angle-double-right"></span>
					</Button>

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