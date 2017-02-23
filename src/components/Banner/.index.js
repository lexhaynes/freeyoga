import React, { Component } from 'react';
import './styles.css';

class Banner extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      item: '',
	    };
	}

	render() {
		return (
			<div className = "Banner">Banner</div>
		);
	}
}

export default Banner;