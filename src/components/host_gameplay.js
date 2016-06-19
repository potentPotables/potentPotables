import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activateButtons } from '../sockets_client';

class HostGamePlay extends Component {
  handleClick(){
    activateButtons(this.props.room);
  }
  render(){
    return (
      <div>
      {this.props.isGameActive === false ?
        <div className="waitingGame">
          Waiting for game to Begin...
        </div> :
        Object.keys(this.props.activeClue).length > 0 ?
        <Link to='/hostanswer'>
          <button onClick={this.handleClick.bind(this)}className="join btn btn-primary">{this.props.activeClue.question}</button>
        </Link> :
        <div className="waitingClue">
          Waiting for clue to be selected...
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    isGameActive: state.gameplay.isGameActive,
    activeClue: state.gameplay.activeClue,
    room: state.linkAuth.linkCode,
  };
}


export default connect(mapStateToProps)(HostGamePlay)

