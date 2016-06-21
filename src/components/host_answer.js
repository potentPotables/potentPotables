import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { declareIncorrect, declareCorrect, skipClue } from '../sockets_client';

class HostAnswer extends Component{
  constructor(props){
    super(props);

    this.handleIncorrectClick= this.handleIncorrectClick.bind(this);
    this.handleCorrectClick= this.handleCorrectClick.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object
  }


  handleIncorrectClick(){
    declareIncorrect(this.props.activeUser, this.props.room, this.props.activeClue);
  }

  handleCorrectClick(){
    declareCorrect(this.props.activeUser, this.props.room, this.props.activeClue);
  }

  componentDidUpdate(){
    if (Object.keys(this.props.activeClue).length === 0){
      this.context.router.push('/hostgameplay');
    }
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
          <Link to= '/hostgameplay'>
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
  return {
    activeClue: state.gameplay.activeClue,
    activeUser: state.gameplay.activeUser,
    room: state.linkAuth.linkCode,
  };
}

export default connect(mapStateToProps)(HostAnswer);
