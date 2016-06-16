import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clue from './clue';
import Scoreboard from './scoreboard';
import { setActiveClue } from '../sockets_client';
import { resetGameboardLive } from '../actions/index';

import _ from 'lodash';

class Gameboard extends Component {
    componentWillUnmount(){
      this.props.resetGameboardLive(false)
    }
    
    render() {
      const clues= _.map(this.props.clues, (clue) => {
        return <Clue value={clue.value}
                     key= {clue.id}
                     clue= {clue}
                     setActiveClue= {setActiveClue}
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
                        <td className="clues" key="filler"></td>
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
          room: state.sessionID}
}


export default connect(mapStateToProps, { resetGameboardLive })(Gameboard);