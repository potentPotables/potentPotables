import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clues extends Component {
	render() {
		return (
			<div>
						<td className="clues"></td>
						<td className="clues">$200</td>
						<td className="clues">$400</td>
						<td className="clues">$600</td>
						<td className="clues">$800</td>
						<td className="clues">$1000</td>
			</div>
		)
	}
};


function mapStateToProps(state){
  return {clues: state.gameboard.clues}
};

export default connect(mapStateToProps)(Clues);