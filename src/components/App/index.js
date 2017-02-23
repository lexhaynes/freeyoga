import React, { Component } from 'react';
import Banner from '../Banner';
import Button from '../Button';
import ClassesToday from '../ClassesToday';
import data from '../../data';
import './styles.css';
/* redux imports */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SampleActions from '../../actions/sample';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <ClassesToday data={data} />
     	  <Button className="button-floating top box-shadow">?</Button>	
		    <Button className="button-floating box-shadow">+</Button>	
      </div>
    );
  }
}

/* redux */
function mapStateToProps(state, prop) {
  return {
    sample: state.sample
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SampleActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
