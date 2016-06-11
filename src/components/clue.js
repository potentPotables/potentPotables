import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clue extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillUpdate(){
    if (this.props.activeClue === ''){
      this.context.router.push('/gameboard');
    }
  }

  render() {
    return(
      <div>
        {this.props.activeClue}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {activeClue: state.gameplay.activeClue};
}

export default connect(mapStateToProps)(Clue);