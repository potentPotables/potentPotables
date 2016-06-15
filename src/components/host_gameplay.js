import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activateButtons } from '../sockets_client';

class HostGamePlay extends Component {
  handleClick(){
    activateButtons(this.props.rooms);
  }
  render(){
    return (
      <div>
      {this.props.isGameActive === false ?
        <div>
          Waiting for game to Begin...
        </div> :
        this.props.activeClue.question ?
        <Link to='/hostanswer'>
          <button onClick={this.handleClick.bind(this)}className="join btn btn-primary">{this.props.activeClue.question}</button>
        </Link> :
        <div>
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

