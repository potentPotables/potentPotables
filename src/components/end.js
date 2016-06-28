import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

export default class End extends Component {

	render(){
		const scores = _.map(this.props.users, function(user) {
			return (
				<div key={user.username}>
					{user.username}: ${user.score}
				</div>
			);
		});

	  return (
	      <div>
	      	<h1>Thank you for playing!</h1>
	      	{ scores }
	      </div>
	  );
	}
}

function mapStateToProps(state){
	return {
  	users: state.gameplay.users,
  };

}

export default connect(mapStateToProps)(End);