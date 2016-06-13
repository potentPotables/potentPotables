import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUsername } from '../actions/index';

class userConfig extends Component {
  constructor (props) {
    super(props);
    this.state = {username: ''}
  }

  nameChange(e) {
    this.setState({username: e.target.value});
  }

  submitUsername(username) {
    this.props.createUsername(username);
    console.log('username is :', username)
  }

  render() {
    return (
        <div>
          <label>Username</label>
          <input onChange={(e) => this.nameChange(e)} type="text" placeholder="Enter Username Here" value={this.state.username}/>
          <button type="button" onClick={() => this.submitUsername(this.state.username)}>Submit</button>
        </div>
    );
  }
}


export default connect(null, {createUsername})(userConfig);



