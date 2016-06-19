import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Peter extends Component {
	render() {
		return (
				<div className="bio">
					<h1>Peter Dinh</h1>
					<img />
					<div>Something that screams hire me here.</div>
					<Link to="hire">
						Hire Peter
					</Link>
				</div>
		);
	}
}