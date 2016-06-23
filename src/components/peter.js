import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Peter extends Component {
	render() {
		return (
			<div className="bio">
				<h1>Peter Dinh</h1>
				<img />
				<div>
					<a href="https://github.com/petertdinh"><img src="http://52.38.175.65:3000/tech_logos/github.png" height="45" width="120"/></a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/petertdinh"><img src="http://52.38.175.65:3000/tech_logos/linkedin.png" height="30" width="120"/></a>
				</div>
				<div>Something that screams hire me here.</div>
				<Link to="hire/peter">
					Hire Peter
				</Link>
			</div>
		);
	}
}