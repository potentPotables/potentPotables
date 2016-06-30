import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Peter extends Component {
	render() {
		return (
			<div className="bio">
				<h1 className="devName peter">Peter Dinh</h1>
				<img />
				<div className="externals">
					<div className="github">
						<a href="https://github.com/petertdinh"><img src="http://50.112.42.29/tech_logos/github.png" height="45" width="120"/></a>
					</div>
					<div className="linkedin">
						<a href="https://www.linkedin.com/in/petertdinh"><img src="http://50.112.42.29/tech_logos/linkedin.png" height="30" width="120"/></a>
					</div>
				</div>
				<div className="sell">Something that screams hire me here.</div>
				<div className="hire link peter">
					<Link to="hire/peter">
						Hire Peter
					</Link>
				</div>
			</div>
		);
	}
}