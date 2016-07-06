import React, { Component, PropTypes } from 'react';

export default class Redirect extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount () {
		setTimeout(function() {
			this.context.router.push('/usergameplay');
		}, 3500);
	}

	render() {

		return (
			<div>
				There's already a host in the game, redirecting you to be a contestant...
			</div>
		);
	}
}
