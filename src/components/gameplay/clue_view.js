import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRoundTwo } from '../../actions/index';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ClueView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  componentDidMount() {
    if(Object.keys(this.props.answeredClues).length === 30){
      this.props.fetchRoundTwo();
    }
  }

  componentDidUpdate(){
    if(Object.keys(this.props.answeredClues).length === 60){
      return this.context.router.push('/end');
    }
    console.log('calling will receive props', this.props.activeClue);
    this.context.router.push('/gameboard');
  }

  render() {
    return(
      <ReactCSSTransitionGroup transitionName="questionPop" transitionAppear={true} transitionAppearTimeout={2000}>
        <div id="question">
          <div id="question-text">
            {this.props.activeClue.question}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

function mapStateToProps(state){
  return {
    activeClue: state.gameplay.activeClue,
    answeredClues: state.gameplay.answeredClues,
  };
}

export default connect(mapStateToProps, { fetchRoundTwo })(ClueView);