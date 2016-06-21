import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { setUserType, linkCodeVerification } from '../actions/index';


class LinkVerification extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit(formProps) {
    this.props.linkCodeVerification(formProps);
    
  }

  renderAlert() {
    if (this.props.linkAuthError !== ''){
      return (
        <div className="alert alert-danger">
          <div>That session does not exist, please check to see if you entered in the link code correctly or create your own session.</div>
        </div>
      );
    }
  }

  checkBox(e){
    e.target.checked === true ? this.props.setUserType('host') : this.props.setUserType('player');
  }


  render(){
    const { handleSubmit, fields: { linkcode }} = this.props;
    return(
      <div className="linkVerify">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Link Code</label>
          <input type="text" placeholder="Enter Link Code Here" {...linkcode}/>
        </div>
        {this.renderAlert()}
        <button type="submit">Submit</button>
      </form>
      <div>
        <input type="checkbox" onClick={(e) => this.checkBox(e) }/>Join as the host
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {linkAuthError: state.linkAuth.linkCodeError};
}

export default reduxForm({
  form: 'LinkForm',
  fields: [ 'linkcode' ]
}, mapStateToProps, { setUserType, linkCodeVerification })(LinkVerification);