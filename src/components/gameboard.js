import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clue from './clue';
import { setActiveClue } from '../sockets_client';
import { setActiveClueGameboard } from '../actions/index';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Gameboard extends Component {
  componentDidMount() {
    if(Object.keys(this.props.answeredClues).length === 30) {
      var dbl = new Audio('http://www.qwizx.com/gssfx/usa/jeop-dj84woosh.wav');
      dbl.play();
    }
  }

  handleSetActiveClue(clue, room){
    setActiveClue(clue, room);
    this.props.setActiveClueGameboard(clue);
    //console.log('inside Set Active Clue');
  }

  render() {

    console.log(this.props.clues);
    const clues= this.props.clues.map((clue) => {
      return <Clue value={clue.value}
                   key= {clue.id}
                   clue= {clue}
                   setActiveClue= {this.handleSetActiveClue.bind(this)}
                   answeredClues= {this.props.answeredClues}
                   room= {this.props.room}/>
    });

    const categories = this.props.categories.map((category, index) => {

      var fontSize;
      if(category.length <= 5) {
        fontSize = "38px";
      } else if(category.length >= 6 && category.length <= 10) {
        fontSize = "34px";
      } else if (category.length >= 11 && category.length <= 16) {
        fontSize = "28px"
      } else if (category.length >= 17 && category.length <= 22) {
        fontSize = "24px";
      } else if (category.length >= 23 && category.length <= 28) {
          fontSize = "22px";
      } else if (category.length >= 29) {
          fontSize = "20px";
      }

      var categoryStyle = {
        fontSize: fontSize
      }

      return(
        <div>
          <thead>
            <th className="categories animated flipInX" style={categoryStyle} key={category}>{category}</th>
          </thead>
          <tbody>
            <tr>
                <div>
                  <td className="clues" key={index}></td>
                </div>
                {clues.splice(0, 5)}
            </tr>
          </tbody>
        </div>
      )
    });

    return(
        <div id="container-table">
          <table className="table table-reflow">
            { categories }
          </table>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.gameplay.user,
    categories: state.gameboard.categories,
    clues: state.gameboard.clues,
    answeredClues: state.gameplay.answeredClues,
    room: state.sessionID.sessionID,
    correct: state.gameplay.correct,
    incorrect: state.gameplay.incorrect,
  };
}

export default connect(mapStateToProps, { setActiveClueGameboard })(Gameboard);