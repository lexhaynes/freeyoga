import React, { Component } from 'react';
import Banner from '../Banner'
import Button from '../Button'
import ClassesToday from '../ClassesToday'
import data from '../data'
import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner></Banner>
        <ClassesToday data={data} />
     	<Button className="button-floating top box-shadow">?</Button>	
		<Button className="button-floating box-shadow">+</Button>	
      </div>
    );
  }
}

export default App;
