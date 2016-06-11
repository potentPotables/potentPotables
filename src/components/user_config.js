import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createUsername } from '../actions/index';

class userConfig extends Component {
  handleFormSubmit(formProps){
    this.props.createUsername(formProps);
  }
  render() {
    const {handleSubmit, fields:{username}}= this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter Username Here" {...username}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'UsernameForm',
  fields: ['username']
}, null, { createUsername })(userConfig);



