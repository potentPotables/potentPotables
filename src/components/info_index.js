import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';
import { Link } from 'react-router';

class InfoIndex extends Component {
	render() {

		return (
			<div className ="landing">
				<div className="logo-holder"><img src="http://localhost:3000/assets/logo.png" /></div>
				<button className="create btn btn-primary btn-lg" onClick={this.props.createSession}>Create a session</button>
				<Link to="/linkverification" className="join btn btn-primary btn-lg">Join a session</Link>
				<video>
				</video>
				<div>
					<Link className="about" to="/about"><strong><u>About</u></strong></Link>
				</div>
			</div>
		);
	}
}

export default connect(null, { createSession })(InfoIndex);