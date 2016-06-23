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
      <div className= 'gameplay-view'>
      {this.props.isGameActive === false ?
        <div className="waitingGame">
          Waiting for game to Begin...
        </div> :
        Object.keys(this.props.activeClue).length > 0 ?
        <div className="buttons-question">
          <Link to='/hostanswer'>
            <a onClick={this.handleClick.bind(this)} className="button1 a" >{this.props.activeClue.question}</a>
          </Link>
        </div> :
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

