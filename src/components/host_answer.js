import React, { Component } from 'react';
import { connect } from 'react-redux';
import { declareCorrect, declareIncorrect, skipClue } from '../actions/index';

class HostAnswer extends Component{
  render(){
    return(
      <div>
        <div>
        {this.props.activeUser}
        </div>
        <div>
        {this.props.activeAnswer}
        </div>
        <div>
          <button className="join btn btn-primary" onClick={() => this.props.declareCorrect(this.props.activeUser)}>Correct</button>
          <button className="join btn btn-primary" onClick={() => this.props.declareIncorrect(this.props.activeUser)}>Incorrect</button>
          <button className="join btn btn-primary" onClick={() => this.props.skipClue()}>Skip</button>
        </div>
      </div>

    );
  }
}

//update return statement to point to correct property on activeClue
function mapStateToProps(state){
  return {activeAnswer: state.gameplay.activeClue.answer, activeUser: state.gameplay.activeUser}
}

export default connect(mapStateToProps, { declareIncorrect, declareCorrect, skipClue })(HostAnswer);
