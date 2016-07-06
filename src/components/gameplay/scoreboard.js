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
    
    var leaders = _.sortBy(this.props.users, function(user) {
      return -user.score;
    });
  	
    const scores = _.map(leaders, function(user) {
      var scoreColor;
      if(user.score === 0 ) {
        scoreColor = "white";
      } else if (user.score < 0 ) {
        scoreColor = "#FF0000";
      } else if (user.score > 0 ) {
        scoreColor = "#00FF00";
      }

      var scoreStyle = {
        color: scoreColor,
        float: "right",
        fontFamily: "Swiss-911-Extra-Compressed"
      }

  		return (
  			<div key={user.username} style={{textAlign: "left", border: "2px outset yellow", padding: "1%"}}>
  				{user.username}: <span style={scoreStyle} >{user.score >= 0 ? '$' + user.score : '-$' + String(user.score).slice(1)}</span>
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