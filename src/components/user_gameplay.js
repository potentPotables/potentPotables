import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendButtonClick } from '../sockets_client';

class UserGameplay extends Component {
  render(){
    return (
      <div>
        <div>
          <button onClick= {() => sendButtonClick(this.props.username, this.props.linkCode)} className="join btn btn-primary">Test Button</button>
        </div>
        <div>
          {this.props.activeUser}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {isButtonDisabled: state.gameplay.isButtonDisabled,
          username: state.user.username,
          linkCode: state.linkAuth.linkCode,
          activeUser: state.gameplay.activeUser}
}

export default connect(mapStateToProps)(UserGameplay);


