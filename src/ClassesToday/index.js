import React, { Component } from 'react';
import moment from 'moment-timezone'
import Button from '../Button'
import ClassBox from '../ClassBox'
import Table from '../Table'
import './styles.css';


var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var date = new Date();
var nyTime = moment().tz("America/New_York").format("hh:mm");
var userTime = moment().format("hh:mm");

class ClassesToday extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	currentDay: date.getDay(),
	      	currentClasses: [],
	      	currentClassTimes: [],
	      	currentTime: nyTime,
	      	userTime: userTime,
	    };

	   	this.displayCurrentClasses = this.displayCurrentClasses.bind(this);
	    this.setCurrentClasses = this.setCurrentClasses.bind(this);
	    this.nextDay = this.nextDay.bind(this);
	    this.prevDay = this.prevDay.bind(this);
	    this.isClassOver = this.isClassOver.bind(this);
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
  				let isHidden = _this.isClassOver(item.classStart) ? "hidden" : "visible";
  				console.log('is hidden: ' + isHidden);
				return (
					<ClassBox key={item.id}
						hidden={isHidden}
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
	/*hide classes whose start tines have passed*/
	isClassOver(classTime) {
		var now = Number(moment().format("Hmm"));
		var classT = Number(classTime.replace(/:/g, ''));

		console.log(now >= classT);

		return now >= classT;
		/*let times = Object.keys(current).map(function(key) {
			//return key.replace(/:/g, '');
			return key;
		});
		let _this = this;

		let hidden = Object.keys(current).reduce(function(result, key) {
			//compare current time to key. if it is less, return
			var timeBlock = Number(key.replace(/:/g, ''));
			var currentTime = Number(_this.state.currentTime.replace(/:/g, ''));
			if (timeBlock <= currentTime) {
				result.push(key);
			} 
			return result;
		}, [])

		return hidden.map(function(key) {
			return _this.state.currentClasses[key];
		});*/
	}

	render() {
	
		return (
			<div className="section today grid-90 grid-center">

				<div className="section-header grid-75 grid-center flex-container flex-space-between">
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

				<p className="grid-90 grid-center">Class data was last updated <em>January, 2017</em>.</p>
			</div>
		);
	}
}

export default ClassesToday;