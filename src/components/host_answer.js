import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { declareIncorrect, declareCorrect, skipClue } from '../sockets_client';

class HostAnswer extends Component{
  constructor(props){
    super(props);
    this.state= {
      incorrectClickCount: 0
    }
    this.skipCurrentClue= this.skipCurrentClue.bind(this);
    this.handleIncorrectClick= this.handleIncorrectClick.bind(this);
    this.handleCorrectClick= this.handleCorrectClick.bind(this);
  }
  skipCurrentClue(){
    skipClue(this.props.room, this.props.activeClue);
  }
  handleIncorrectClick(){
    this.state.incorrectClickCount ++;
    declareIncorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    clearTimeout(initalTimeout);
    if (this.state.incorrectClickCount === this.props.userCount){
      this.skipCurrentClue();
    }
    if (this.state.incorrectClickCount !== this.props.userCount){
      var incorrectTimeout= setTimeout(this.skipCurrentClue, 10000);
    }
  }
  handleCorrectClick(){
    declareCorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    clearTimeout(initialTimeout);
  }
  componentDidMount(){
    var initialTimeout= setTimeout(this.skipCurrentClue, 10000);
  }
  componentDidUpdate(){
    clearTimeout(incorrectTimeout);
  }
  componentDidUnMount(){
    clearTimeout(incorrectTimeout);
  }
  render(){
    return(
      <div>
        <div>
        {this.props.activeUser}
        </div>
        <div>
        {this.props.activeClue.answer}
        </div>
        <div>
          <Link to= '/gameboard'>
            <button className="join btn btn-primary" onClick={this.handleCorrectClick}>Correct</button>
          </Link>
          <button className="join btn btn-primary" onClick={this.handleIncorrectClick}>Incorrect</button>
        </div>
      </div>

    );
  }
}

//update return statement to point to correct property on activeClue
function mapStateToProps(state){
  return {activeClue: state.gameplay.activeClue,
          activeUser: state.gameplay.activeUser,
          room: state.linkAuth.linkCode,
          usersCount: state.user.count}
}

export default connect(mapStateToProps, { skipClue })(HostAnswer);
