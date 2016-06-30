import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchGame, checkForHost } from '../actions/index';
import { joinRoom, startGame } from '../sockets_client';
import UsersListEntry from './link_landing_users';
import _ from 'lodash';

class LinkLanding extends Component {
  componentDidMount(){
    joinRoom(this.props.link);
    this.props.fetchGame();
  }

  handleClick() {
    this.props.checkForHost(this.props.link);
  }

  renderAlert() {
    if (this.props.startGameError !== ''){
      return (
        <div className="alert alert-danger">
          <div>Please have a host join before you start the game.</div>
        </div>
      );
    }
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
        <button onClick= {this.handleClick.bind(this)} id="startGame" className="a">Start Game</button>
        {this.renderAlert()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    link: state.sessionID.sessionID,
    users: state.gameplay.users,
    startGameError: state.linkAuth.startGameError,
  };
}
export default connect(mapStateToProps, { fetchGame, checkForHost })(LinkLanding)