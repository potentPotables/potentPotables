import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';

class InfoIndex extends Component {
	render() {

		return (
			<div>
				<div className="landing-page">Landing icon</div>
				<button className="create btn btn-primary" onClick={this.props.createSession}>Create a session</button>
				<button className="join btn btn-primary">Join a session</button>
			</div>
		);
	}
}

export default connect(null, { createSession })(InfoIndex);