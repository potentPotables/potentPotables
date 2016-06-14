import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './categories';
// import Clues from './clues';


class Gameboard extends Component {
    render() {
      return(
        <div>
          <Categories />
        </div>  
    );
  }
}

function mapStateToProps(state){
  return {users: state.gameplay.user}
}

export default connect(mapStateToProps)(Gameboard);