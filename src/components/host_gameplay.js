import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activateButtons } from '../sockets_client';

class HostGamePlay extends Component {
  constructor(props){
    super(props)
    this.handleQuestionLength= this.handleQuestionLength.bind(this);
  }
  handleClick(){
    activateButtons(this.props.room);
  }
  handleQuestionLength(){
    var tempQuestion= this.props.activeClue.question.split(' ');
    var flag= false;
    if (tempQuestion.length === 1 && tempQuestion[0].indexOf(',') !== -1){
      tempQuestion= this.props.activeClue.question.split(',');
      flag= true;
    }
    var results= [];
    var tempResults= [];
    if (tempQuestion.length < 7){
      if (flag){
      return tempQuestion.join(', ');
      }
      return tempQuestion.join(' ');
    }
    else{
      for (var i= 0; i< tempQuestion.length; i++){
        tempResults.push(tempQuestion[i]);
        if (tempResults.length % 7 === 0){
          results.push(<div>{tempResults.join(' ')}<br/></div>);
          tempResults= [];
        }
      }
      if (tempResults.length > 0){
        results.push(<div>{tempResults.join(' ')}</div>);
      }
      return results;
    }
  }
  render(){
    return (
      <div className= 'gameplay-view'>
      {this.props.isGameActive === false ?
        <div className="waitingGame animated infinite flash">
          Waiting for game to Begin...
        </div> :
        Object.keys(this.props.activeClue).length > 0 ?
        <div>
          <div className= 'host-gameplay-question'>
          {this.handleQuestionLength()}
          </div>
          <div className="buttons-question">
            <Link to='/hostanswer'>
              <a onClick={this.handleClick.bind(this)} className="button1 a" id="activateUsers">Activate Users</a>
            </Link>
          </div>
        </div>:
        <div className="waitingClue animated infinite flash">
          Waiting for clue to be selected...
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('inside hostgameplay', state.gameplay.activeClue);
  return {
    isGameActive: state.gameplay.isGameActive,
    activeClue: state.gameplay.activeClue,
    room: state.linkAuth.linkCode,
  };
}


export default connect(mapStateToProps)(HostGamePlay)

