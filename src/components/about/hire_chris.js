import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createMessage } from '../../actions/index';

class HireChris extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createMessage(props, 'loncarichchris@gmail.com');
		this.context.router.push('/');
	}

	render() {
		const { fields: { name, company, email, message }, handleSubmit } = this.props;

		return (
			<div className="hireContainer">
			<div className="hireLayout">
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			  <h3 style={{color: "yellow", fontFamily: "Swiss-911", fontSize: "3em"}}>Send me a message</h3>
			  <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
			    <label><strong style={{fontSize: "2em"}}>Name</strong></label>
			    <input type="text" className="form-control hire-input" {...name} />
			    <div class="text-help">
			      {name.touched ? name.error: ''}
			    </div>
			  </div>

			  <div className={`form-group ${company.touched && company.invalid ? 'has-danger' : ''}`}>
			    <label><strong style={{fontSize: "2em"}}>Company</strong></label>
			    <input type="text" className="form-control hire-input" {...company} />
			    <div class="text-help">
			      {company.touched ? company.error: ''}
			    </div>
			  </div>


			  <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
			    <label><strong style={{fontSize: "2em"}}>Email</strong></label>
			    <input type="email" className="form-control hire-input" {...email} />
			    <div class="text-help">
			      {email.touched ? email.error: ''}
			    </div>
			  </div>
			  
			  <div className={`form-group ${message.touched && message.invalid ? 'has-danger' : ''}`}>
			    <label><strong style={{fontSize: "2em"}}>Message</strong></label>
			    <input type="text" className="form-control hire-input" {...message} />
			    <div class="text-help">
			      {message.touched ? message.error: ''}
			    </div>
			  </div>

			  <button type="submit" id="submitMessage">Submit</button>
			</form>
			</div>
			</div>
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
}, null, { createMessage })(HireChris);