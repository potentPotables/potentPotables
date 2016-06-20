import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreBoard extends Component {


  render(){
    return (
      <div>
      </div>
    );
  }
}

function mapStateToProps(state){

  return {
  	users: state.gameplay.users,
  };
}

export default connect(mapStateToProps)(ScoreBoard);