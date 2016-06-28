import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';


class Scoreboard extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillReceiveProps() {
    this.context.router.push('/usergameplay');
  }

  render(){
  	const scores = _.map(this.props.users, function(user) {
  		return (
  			<div key={user.username} style={{border: "2px outset yellow", padding: "1%"}}>
  				{user.username}: <span className="user-score">${user.score}</span>
  			</div>
  		);
  	});

    return (
        <div id="scoreboardContainer" className="animated flipInY">
          <div id="scoreboard-header" className=" animated infinite pulse">SCOREBOARD</div>
    	     
          <div className="scoreboard-scores">
        	 { scores }
          </div>
          <Link to="usergameplay">
            <a className="a back">Back</a>
          </Link>
        </div>
    );
  }
}

function mapStateToProps(state){
	return {
  	users: state.gameplay.users,
    isButtonDisabled: state.gameplay.isButtonDisabled,
  };

}

export default connect(mapStateToProps)(Scoreboard);