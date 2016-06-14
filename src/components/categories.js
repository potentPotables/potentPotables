import React, { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
	render() {

		const categories = this.props.categories.map((category) => {
			return(
      	<th className="col-md-2 categories" key={category}> {category} </th>
    	)
  	});
  	
  	return (
  		<div> 
  			{categories} 
  		</div>
  	);
 	}
}

function mapStateToProps(state){
  return {categories: state.gameboard.categories}
};

export default connect(mapStateToProps)(Categories);