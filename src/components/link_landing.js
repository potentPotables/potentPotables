import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

class LinkLanding extends Component {
  render() {
    return (
      <div>Link Code: {this.props.link}</div>
      <Link to='/gameboard'>
        <button className="join btn btn-primary">Start Game</button>
      </Link>
    );
  }
};

function MapStateToProps(state) {
  return {link: state.sessionID};
}
export default connect(mapStateToProps)(LinkLanding)