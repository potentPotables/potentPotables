import React, { Component } from 'react';
import { Link } from 'react-router';

const Clue = (props) => (

			<div>
      {props.answeredClues[props.clue.id] !== undefined ?

        <td className="clues"></td> :

				<Link to="/clue_view">
					<td onClick= {() => props.setActiveClue(props.clue, props.room)}
              className="clues">${props.value}</td>
				</Link>
      }
			</div>


);

export default Clue;