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
	      	currentClassTimes: []
	    };

	   this.displayCurrentClasses = this.displayCurrentClasses.bind(this);
	    this.setCurrentClasses = this.setCurrentClasses.bind(this);
	    this.nextDay = this.nextDay.bind(this);
	    this.prevDay = this.prevDay.bind(this);
	}

	componentDidMount() {
		//fetch data here in the future
		this.setCurrentClasses(this.state.currentDay);
	}

	/*
	 * checks props.data for classes happening today and adds them to the state.currentClasses object by time slot
	*/	
	setCurrentClasses(currentDay) {
		// functional syntax equivalent to the above.
		// ensures we don't get empty values in state.currentClasses array
	/*	let currentClasses = this.props.data
			.filter( item => item.day === days[currentDay] )
			.map( (item, i) => item );*/
		let currentClasses = {};

		for (let i = 0; i < this.props.data.length; i++) {
			let item = this.props.data[i];
			if (item.day === days[currentDay]) {
				if (!(item.classStart in currentClasses))
					currentClasses[item.classStart] = new Array(item);
				else {
					currentClasses[item.classStart].push(item);
				}
			}
		}

		this.setState({
			'currentClasses': currentClasses,
		});
	}

	/*
	 * returns an array of timeslots + classes (as ClassBox),
	 * where index[0] is the timeslot, and index[1] is an array of classes
	*/	
	displayCurrentClasses() {
		let _this = this;
		return Object.keys(this.state.currentClasses).map(function(key) {
  			return ([key, _this.state.currentClasses[key].map(function(item) {
				return (
					<ClassBox key={item.id}
				  		title={item.className}
				  		start={item.classStart}
				  		end={item.classEnd}
				  		teacher={item.teacher}   
				  		location={item.studio}
				  		hood={item.neighborhood}
				  		coords={item.coords}
				  		url={item.scheduleLink}
					 />)
				})
  			])
			
  		});
	}

	nextDay() {
		let nextDay = this.state.currentDay === 6 ? 0 : this.state.currentDay + 1;
		this.setState({
			'currentDay': nextDay
		});
		this.setCurrentClasses(nextDay);
	}	
	prevDay() {
		let prevDay = this.state.currentDay === 0 ? 6 : this.state.currentDay - 1;
		this.setState({
			'currentDay': prevDay
		});
		this.setCurrentClasses(prevDay);
	}

	render() {
		//this.parseData();

		return (
			<div className="section today grid-90 grid-center">

				<div className="section-header flex-container flex-space-between">
					<Button className="button-navigation" onClick={this.prevDay}>
						<span className="fa fa-angle-double-left"></span> Yesterday
					</Button>

					<div className="section-title"><span className="text-capitalize">{days[this.state.currentDay]}</span> Classes</div>

					<Button className="button-navigation" onClick={this.nextDay}>
						Tomorrow <span className="fa fa-angle-double-right"></span>
					</Button>

				</div>

				<div className="section-content slider">
					<Table
						className="grid-100 grid-center"
						data={this.displayCurrentClasses}  
					/>
				</div>
			</div>
		);
	}
}

export default ClassesToday;