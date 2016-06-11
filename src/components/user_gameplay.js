import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserGameplay extends Component {
  render(){
    return (
      <div>
        <div>
          <button className="join btn btn-primary">Test Button</button>
        </div>
        <div>
          {this.props.activeUser}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {isButtonActive: state.gameplay.isButtonActive, activeUser: state.gameplay.activeUser}
}

export default connect(mapStateToProps)(UserGameplay);


