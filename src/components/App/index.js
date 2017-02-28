import React, { Component } from 'react';
import Banner from '../Banner';
import Button from '../Button';
import ClassesToday from '../ClassesToday';
import data from '../../data';
import './styles.css';
/* redux imports */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as classesActions from '../../redux/actions/classes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner actions={this.props.actions} />
        <ClassesToday data={data} />
     	  <Button 
          className="button-floating top box-shadow">?</Button>	
		    <Button 
          className="button-floating box-shadow"
          onClick={this.props.actions.addClass}
          >+</Button>	
      </div>
    );
  }
}

/* redux */
function mapStateToProps(state) {
  return {
    classes: state.classes
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({
        addClass: classesActions.addClass,
        editClass: classesActions.editClass,
    }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
