import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { declareIncorrect, declareCorrect, skipClue } from '../../sockets_client';

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
      <div className= 'host-view'>
        <div className= 'active-user'>
        {this.props.activeUser !== '' ?
          <div>Active User: {this.props.activeUser}</div> :
          <div></div>
        }
        </div>
        <div className= 'host-answer'>
        {this.props.activeClue.answer}
        </div>
        {this.props.activeUser !== '' ?
          <div className= 'row'>
            <Link to="hostgameplay">
              <a className="a correct" onClick={this.handleCorrectClick}> Correct </a>
            </Link>
            <a className="a incorrect" onClick={this.handleIncorrectClick}> Incorrect </a>
          </div>:
          <div className= 'row'>
            <Link to="hostgameplay">
              <a className="a correct disable" onClick={this.handleCorrectClick} disabled= {true}> Correct </a>
            </Link>
            <a className="a incorrect disable" onClick={this.handleIncorrectClick} disabled= {true}> Incorrect </a>
          </div>
        }
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
    answeredClues: state.gameplay.answeredClues,
  };
}

export default connect(mapStateToProps)(HostAnswer);