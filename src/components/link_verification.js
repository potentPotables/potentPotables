import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { setUserType, linkCodeVerification } from '../actions/index';


class LinkVerification extends Component {
  handleFormSubmit(formProps){
    this.props.linkCodeVerification(formProps);
  }
  renderAlert(){
    if (this.props.linkAuthError !== ''){
      return (
        <div className= 'alert alert-danger'>
          <strong>{this.props.linkAuthError}</strong>
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: { linkCode }} = this.props;
    return(
      <div>
      <div>
        I am a:
        <div>
          <button className="join btn btn-primary" onClick= {() => this.props.setUserType('host')}>Host</button>
        </div>
        <div>
         <button className="join btn btn-primary" onClick= {() => this.props.setUserType('player')}>Player</button>
        </div>
      </div>
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Link Code</label>
          <input type="text" placeholder="Enter Link Code Here" {...linkCode}/>
        </div>
        {this.renderAlert()};
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {linkAuthError: state.linkAuth.linkCodeError};
}

export default reduxForm({
  form: linkForm,
  fields: [ linkCode ]
}, mapStateToProps, { setUserType, linkCodeVerification })(LinkVerification);