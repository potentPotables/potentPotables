import React, { Component } from 'react';
import { Link } from 'react-router';

const Clue = ({value}) => (

			<div>
				<Link to="/clue_view">
					<td className="clues">${value}</td>
				</Link>
			</div>

);

export default Clue;