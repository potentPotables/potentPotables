import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';
import { Link } from 'react-router';

class InfoIndex extends Component {
	render() {

		return (
			<div>
				<div className="landing-page">Landing icon</div>
				<button className="create btn btn-primary" onClick={this.props.createSession}>Create a session</button>
				<Link to="/linkverification" className="join btn btn-primary">Join a session</Link>
			</div>
		);
	}
}

export default connect(null, { createSession })(InfoIndex);