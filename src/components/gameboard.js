import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gameboard extends Component {
  render() {
    return(
      <div>
        <div>
        Gameboard
        </div>
        <div>
        {this.props.users}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {users: state.gameplay.users}
}

export default connect(mapStateToProps)(Gameboard);