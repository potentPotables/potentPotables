import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <button className="join btn btn-primary">Correct</button>
          <button className="join btn btn-primary">Incorrect</button>
        </div>
      </div>

    );
  }
}

//update return statement to point to correct property on activeClue
function mapStateToProps(state){
  return {activeAnswer: state.gameplay.activeClue.answer, activeUser: state.gameplay.activeUser}
}

export default connect(mapStateToProps)(HostAnswer);
