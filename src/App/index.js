import React, { Component } from 'react';
import Banner from '../Banner'
import ClassesToday from '../ClassesToday'
import data from '../data'
import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner></Banner>
        <ClassesToday data={data} />
     
      </div>
    );
  }
}

export default App;
