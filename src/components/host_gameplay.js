import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HostGamePlay extends Component {
  render(){
    return (
      <div>
      {this.props.isGameActive === false ?
        <div>
          Waiting for game to Begin...
        </div> :
        this.props.activeClue.question ? 
        <Link to='/hostanswer'>
          <button className="join btn btn-primary">{this.props.activeClue.question}</button>
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
    activeClue: state.gameplay.activeClue
  };
}

export default connect(mapStateToProps)(HostGamePlay)