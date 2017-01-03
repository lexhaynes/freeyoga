import React, { Component } from 'react';
import './styles.css';

class Sample extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      item: '',
	    };
	}

	render() {
		return (
			<div className = "Sample">Sample</div>
		);
	}
}

export default Sample;