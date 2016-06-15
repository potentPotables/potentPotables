import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetClueValue } from '../actions/index';

class ClueView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillUpdate(){
    if (this.props.activeClue === ''){
      this.context.router.push('/gameboard');
    }
  }

  componentWillMount(){
    this.props.resetClueValue(this.props.activeClue);
  }

  render() {
    return(
      <div>
        {this.props.activeClue.question}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {activeClue: state.gameplay.activeClue};
}

export default connect(mapStateToProps, { resetClueValue })(ClueView);