import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';
import { Link } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class InfoIndex extends Component {
	render() {

		return (
			<div className ="landing">
				<ReactCSSTransitionGroup transitionName="logo-transition" transitionAppear={true} transitionAppearTimeout={1500}>
					<div className="logo-holder"><img id="logo" src="./assets/logo.png"/></div>
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="index-transition" transitionAppear={true} transitionAppearTimeout={3000}>
					<div>
						<button className="create btn btn-primary btn-lg" onClick={this.props.createSession}>Create a session</button>
					</div>
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="index-transition" transitionAppear={true} transitionAppearTimeout={3000}>
					<div>
						<Link to="/linkverification" className="join btn btn-primary btn-lg">Join a session</Link>
					</div>
					<span>
						<Link className="about" to="/about"><strong><u>About</u></strong></Link>
					</span>
					<span>
						<Link className="howto" to="/howto"><strong><u>How to Play</u></strong></Link>
					</span>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default connect(null, { createSession })(InfoIndex);

