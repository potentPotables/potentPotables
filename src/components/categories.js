import React, { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
	render() {
   	return (
    		<div>
    			{categories}
    		</div>
    );
 	}
}

function mapStateToProps(state){
  return {categories: state.gameboard.categories, clues: state.gameboard.clues}
};

export default connect(mapStateToProps)(Categories);