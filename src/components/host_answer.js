import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { declareIncorrect, declareCorrect, skipClue } from '../sockets_client';
import { skipClueLocal } from '../actions/index';

class HostAnswer extends Component{
  constructor(props){
    super(props);
    this.state= {
      incorrectClickCount: 0,
      generalTimeout: null,
      activeUserTimeout: null
    }
    //this.skipCurrentClue= this.skipCurrentClue.bind(this);
    this.handleIncorrectClick= this.handleIncorrectClick.bind(this);
    this.handleCorrectClick= this.handleCorrectClick.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.object
  }
  // skipCurrentClue(){
  //   console.log('insideSkipCurrentClue');
  //   skipClue(this.props.room, this.props.activeClue);
  //   this.props.skipClueLocal();
  //   this.context.router.push('/hostgameplay')
  // }

  handleIncorrectClick(){
    this.state.incorrectClickCount ++;
    declareIncorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    const incorrect = new Audio('http://www.qwizx.com/gssfx/usa/j64-outtatime.wav');
    incorrect.play();
  }

  handleCorrectClick(){
    console.log('inside HostAnswer line 38;');
    declareCorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    const correct = new Audio('http://www.qwizx.com/gssfx/usa/j64-ringin.wav');
    correct.play();
  }

  componentDidMount(){
    //this.setState({generalTimeout: setTimeout(this.skipCurrentClue, 10000)});
  }

  componentWillReceiveProps(){
    console.log('inside will receive props');
   // clearTimeout(this.state.generalTimeout);
   // this.setState({activeUserTimeout: setTimeout(this.handleIncorrectClick, 10000)})
  }

  componentDidUnMount(){
    //clearTimeout(this.state.generalTimeout);
    //clearTimeout(this.state.activeUserTimeout);
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
    usersCount: state.user.count,
  };
}

export default connect(mapStateToProps, { skipClueLocal })(HostAnswer);
