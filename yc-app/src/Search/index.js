import React, { Component } from 'react';
import Button from '../Button';
import './styles.css';

class Search extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      item: '',
	    };
	}

	render() {
		return (
			<div className="search">
				<Button className="button-icon fa fa-search"></Button>
				<input className="input-plain" type="search" placeholder="Search" id="searchInput" /> 
			</div>
		);
	}
}

export default Search;