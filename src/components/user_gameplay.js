import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendButtonClick } from '../sockets_client';

class UserGameplay extends Component {
  render(){
    return (
      <div>
        {this.props.isGameActive === false ?
          <div>
            Waiting for game to Begin...
          </div> :
          this.props.activeClue.question ?
          this.props.isButtonDisabled ?
        <div>
          <div>Button disabled</div>
          <div>
              <button onClick= {() => sendButtonClick(this.props.username, this.props.linkCode)} className="join btn btn-primary">Test Button</button>
          </div>
        </div> :
        <div>
          <button onClick= {() => sendButtonClick(this.props.username, this.props.linkCode)} className="join btn btn-primary">Test Button</button>
        </div> :
        <div>
          Waiting for clue to be selected...
        </div>
        }
        <div>
          {this.props.activeUser}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    isButtonDisabled: state.gameplay.isButtonDisabled,
    username: state.user.username,
    linkCode: state.linkAuth.linkCode,
    activeUser: state.gameplay.activeUser,
    isGameActive: state.gameplay.isGameActive,
    activeClue: state.gameplay.activeClue,
  };
}

export default connect(mapStateToProps)(UserGameplay);


