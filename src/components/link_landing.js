import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchGame } from '../actions/index';

class LinkLanding extends Component {
  render() {
    return (
      <div>
      <div>Link Code: {this.props.link}</div>
      <button onClick= {() => this.props.fetchGame()}className="join btn btn-primary">Start Game</button>
      </div>
    );
  }
};

function MapStateToProps(state) {
  return {link: state.sessionID};
}
export default connect(mapStateToProps, { fetchGame })(LinkLanding)