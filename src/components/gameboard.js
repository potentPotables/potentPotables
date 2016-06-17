import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Clue from './clue';
import Scoreboard from './scoreboard';
import { setActiveClue } from '../sockets_client';
import { setActiveClueGameboard } from '../actions/index';


import _ from 'lodash';


class Gameboard extends Component {
    handleSetActiveClue(clue, room){
      setActiveClue(clue, room);
      this.props.setActiveClueGameboard(clue);
    }
    render() {
      // var styles = {
      //   hover: {
      //     ':hover': {
      //       fontSize: 50,
      //       color: 'black',
      //       borderRadius: 5,
      //       height: 50 
      //     }
      //   }
      // };

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
        <div>
          <table className="table table-reflow">
              { categories }
          </table>
          <Scoreboard users= {this.props.users}/>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {users: state.gameplay.user,
          categories: state.gameboard.categories,
          clues: state.gameboard.clues,
          answeredClues: state.gameplay.answeredClues,
          room: state.sessionID}
}

Gameboard = Radium(Gameboard);

export default connect(mapStateToProps, { setActiveClueGameboard })(Gameboard);