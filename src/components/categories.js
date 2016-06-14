import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clues from './clues';

class Categories extends Component {
	render() {

		const categories = this.props.categories.map((category) => {
			return(
        <div>
          <tbody>
            <tr>
              <th className="categories" key={category}> {category} </th>
            </tr>
            <tr>
                <Clues />
            </tr>
          </tbody>
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