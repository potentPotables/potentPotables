import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSession } from '../actions/index';
import { Link } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class InfoIndex extends Component {
	
	render() {

		return (
			<div className ="landing">
				<ReactCSSTransitionGroup transitionName="logo-transition" transitionAppear={true} transitionAppearTimeout={2000}>
					<div className="logo-holder"><img id="logo" src="http://50.112.42.29/assets/logo.png"/></div>
				</ReactCSSTransitionGroup>
				<div className="buttons animated bounceIn">
					<a className="create a" onClick={this.props.createSession}>Create a Game</a>
				</div>
				  	<div className="btm animated bounceIn">
						  <Link to="linkverification">
						  	<a className="create a">Join a Game</a>
						  </Link>
					  </div>
				<div className="links animated fadeInUp">
					<div id="aboutDiv">
						<Link className="about" to="/about"><strong><u>About</u></strong></Link>
					</div>
					<div id="howtoDiv">
						<Link className="howto" to="/howto"><strong><u>How to Play</u></strong></Link>
					</div>
					<div id="creditsDiv">
						<Link className="credits" to="/credits"><strong><u>Credits</u></strong></Link>
					</div>
				</div>
			</div>
		);
	}
}


export default connect(null, { createSession })(InfoIndex);