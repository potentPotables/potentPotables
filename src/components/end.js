import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class End extends Component {

	componentDidMount() {
		const end = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2014/10/Jeopardy-theme-song.mp3');
		end.play();
	}

	render(){
		const scores = _.map(this.props.users, function(user) {
			return (
				<div className="report" key={user.username}>
						<span className="finaluser">{user.username}:</span>
						<span className="finalscore">{user.score > 0 ? '$' + user.score : '-$' + user.score}</span>
				</div>
			);
		});

	  return (
	      <div id="end">
	      	<h1 className="thankyou animated infinite flash">Thank you for playing!</h1>
	      	<div className="final header"><strong>Final scores:</strong></div>
	      	<div className="final scores">
	      		{ scores }
	      	</div>
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