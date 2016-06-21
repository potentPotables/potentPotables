import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchGame, closeSession } from '../actions/index';
import { joinRoom, startGame } from '../sockets_client';
import UsersListEntry from './link_landing_users';
import _ from 'lodash';

class LinkLanding extends Component {
  componentDidMount(){
    joinRoom(this.props.link);
    this.props.fetchGame();
  }

  handleClick() {
    const start = new Audio('http://www.qwizx.com/gssfx/usa/jboardfill.wav');
    start.play();
    this.props.closeSession(this.props.link);
    startGame(this.props.link);
  }

  render() {

    const usersList= _.map(this.props.users, user =>{
      console.log('user is', user);
     return <UsersListEntry username= {user.username} photo= {user.photo}/>

    })
    return (
      <div className="linkEnter">
      <div>Link Code: {this.props.link}</div>
      <div> {usersList}</div>
      <Link to='/gameboard'>
        <button onClick= {this.handleClick.bind(this)} className="join btn btn-primary">Start Game</button>
      </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {link: state.sessionID,
          users: state.gameplay.users};
}
export default connect(mapStateToProps, { fetchGame, closeSession })(LinkLanding)