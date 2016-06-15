import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './categories';
import Clue from './clue';
import { setActiveClue } from '../sockets_client';


class Gameboard extends Component {
    render() {
      const clues= this.props.clues.map((clue) => {
        return <Clue value={clue.value}
                     key= {clue.id}
                     clue= {clue}
                     setActiveClue= {setActiveClue}
                     room= {this.props.room}/>
      });

      const categories = this.props.categories.map((category, index) => {
        return(
          <div>
            <tbody>
              <tr>
                <th className="categories" key={category}> {category} </th>
              </tr>
              <tr>
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


export default connect(mapStateToProps)(Gameboard);