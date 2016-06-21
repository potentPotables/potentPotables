import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';
import { Link } from 'react-router';

class InfoIndex extends Component {
	render() {

		return (
			<div className ="landing">
				<div className="logo-holder"><img src="../../public/assets/logo.png" /></div>
				<div>
				<button className="create btn btn-primary btn-lg" onClick={this.props.createSession}>Create a session</button>
				</div>
				<div>
				<Link to="/linkverification" className="join btn btn-primary btn-lg">Join a session</Link>
				</div>
				<span>
					<Link className="about" to="/about"><strong><u>About</u></strong></Link>
				</span>
				<span>
					<Link className="howto" to="/howto"><strong><u>How to Play</u></strong></Link>
				</span>
			</div>
		);
	}
}

export default connect(null, { createSession })(InfoIndex);