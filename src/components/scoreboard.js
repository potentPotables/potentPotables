import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

class Scoreboard extends Component {
	componentDidMount() {

	}
  render(){
  	const scores = _.map(this.props.users, function(user) {
  		return (
  			<div key={user.username}>
  				{user.username}: ${user.score}
  			</div>
  		);
  	});

    return (
    	<Link to="usergameplay">
      <div>
      	{scores}
      </div>
      </Link>
    );
  }
}

function mapStateToProps(state){
	return {
  	users: state.gameplay.users,
  };

}

export default connect(mapStateToProps)(Scoreboard);