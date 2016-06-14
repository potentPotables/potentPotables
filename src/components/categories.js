import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clues from './clues';

class Categories extends Component {
	render() {

		const categories = this.props.categories.map((category) => {
			return(
        <div>
          <div>
            <th className="col-md-2 categories" key={category}> {category} </th>
          </div>
          
        <div>
          <tr>
            <Clues />
          </tr>
        </div>
      </div>
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