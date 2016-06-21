import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Clue from './clue';
import { setActiveClue } from '../sockets_client';
import { setActiveClueGameboard } from '../actions/index';

class Gameboard extends Component {
  handleSetActiveClue(clue, room){
    setActiveClue(clue, room);
    this.props.setActiveClueGameboard(clue);
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
      return(
        <div>
          <thead>
            <th className="categories" key={category}>{category}</th>
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
    room: state.sessionID,
    correct: state.gameplay.correct,
    incorrect: state.gameplay.incorrect,
  };
}

export default connect(mapStateToProps, { setActiveClueGameboard })(Gameboard);