import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createMessage } from '../actions/index';

class Hire extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createMessage(props)
		.then(() => { 
			this.context.router.push('/');
		});
	}

	render() {
		const { fields: { name, company, email, message }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			  <h3>Send me a message.</h3>
			  <div className="form-group">
			    <label><strong>Name</strong></label>
			    <input type="text" className="form-control" {...name} />
			    <div class="text-help">
			      {name.touched ? name.error: ''}
			    </div>
			  </div>

			  <div className={`form-group ${company.touched && company.invalid ? 'has-danger' : ''}`}>
			    <label><strong>Company</strong></label>
			    <input type="text" className="form-control" {...company} />
			    <div class="text-help">
			      {company.touched ? company.error: ''}
			    </div>
			  </div>


			  <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
			    <label><strong>Email</strong></label>
			    <input type="email" className="form-control" {...email} />
			    <div class="text-help">
			      {email.touched ? email.error: ''}
			    </div>
			  </div>
			  
			  <div className={`form-group ${message.touched && message.invalid ? 'has-danger' : ''}`}>
			    <label><strong>Message</strong></label>
			    <textarea className="form-control" {...message} />
			    <div class="text-help">
			      {message.touched ? message.error: ''}
			    </div>
			  </div>

			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.name){
		errors.name = 'Enter your name!';
	}
	if (!values.company){
		errors.company = 'On who\'s behalf?';
	}
	if (!values.email){
		errors.email = 'Leave an email so we can get back to you!';
	}
	if(!values.message){
		errors.message = 'Don\'t leave this blank!';
	}

	return errors;
}

export default reduxForm({
	form: 'HireMessageForm',
	fields: ['name', 'company', 'email', 'message'],
	validate,
}, null, { createMessage })(Hire);