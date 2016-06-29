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
    checkForHost(this.props.link);
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
        <button onClick= {this.handleClick.bind(this)} id="startGame" className="a">Start Game</button>
      </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log('insidestate', state.sessionID.sessionID);
  return {
    link: state.sessionID.sessionID,
    users: state.gameplay.users,
  };
}
export default connect(mapStateToProps, { fetchGame, checkForHost })(LinkLanding)