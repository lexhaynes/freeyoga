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

	setCurrentClasses(currentDay) {
		// functional syntax equivalent to the above.
		// ensures we don't get empty values in state.currentClasses array
	/*	let currentClasses = this.props.data
			.filter( item => item.day === days[currentDay] )
			.map( (item, i) => item );*/
		let currentClasses = {};

		for (var i = 0; i < this.props.data.length; i++) {
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

	displayCurrentClasses() {
		let _this = this;
		return Object.keys(this.state.currentClasses).map(function(key) {
  			let timeBlock = _this.state.currentClasses[key];
  			return timeBlock.map(function(item) {
				return (
					<div>
					<h1>{item.classStart}</h1>
					<ClassBox key={item.id}
				  		classTitle={item.className}
				  		classTime={item.classStart}
				  		classTeacher={item.teacher}   
				  		classLocation={item.studio}
					 />
					 </div>)
			});
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

					<div className="section-title"><span className="text-capitalize">{days[this.state.currentDay]}'s</span> Classes</div>

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