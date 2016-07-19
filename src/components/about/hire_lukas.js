import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Hire from './hire';
import { createMessage } from '../../actions/index';

class HireLukas extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createMessage(props, 'lstuartfry@gmail.com');
		this.context.router.push('/');
	}

	render() {

		return (
			<Hire onSubmit={this.onSubmit.bind(this)} />
		);
	}
}

export default connect(null, { createMessage })(HireLukas);