import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendButtonClick } from '../sockets_client';

class UserGameplay extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
  }

  shouldComponentUpdate(){
    this.setState({score: this.props.users[this.props.username].score});
  }

  render(){
    console.log('inside user_gameplay: ', this.props.users);
    // console.log(this.props.users[this.props.username].score);
    return (
      <div>
      <div>
        {this.props.activeUser ?
          <div>{this.props.activeUser} buzzed in!</div>:
          <div></div>
        }
      </div>
        {this.props.isGameActive === false ?
          <div>
            Waiting for game to Begin...
          </div> :
          this.props.isButtonDisabled ?
              <div>
                <div>Button disabled</div>
              </div> :
            this.props.hasAnsweredUsers.indexOf(this.props.username) !== -1 ?
              <div>
                <div>Button disabled</div>
                <div>
                    <button onClick= {() => sendButtonClick(this.props.username, this.props.linkCode)} className="join btn btn-primary">Test Button</button>
                </div>
              </div> :
              <div>
                <button onClick= {() => sendButtonClick(this.props.username, this.props.linkCode)} className="join btn btn-primary">Test Button</button>
              </div>
        }
        <div>
          <div>{this.props.username}</div>
            <div>Score: </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    isButtonDisabled: state.gameplay.isButtonDisabled,
    username: state.user.username,
    users: state.gameplay.users,
    linkCode: state.linkAuth.linkCode,
    activeUser: state.gameplay.activeUser,
    isGameActive: state.gameplay.isGameActive,
    activeClue: state.gameplay.activeClue,
    hasAnsweredUsers: state.gameplay.hasAnsweredUsers
  };
}

export default connect(mapStateToProps)(UserGameplay);


