import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Peter extends Component {
	render() {
		return (
			<div className="bioContainer">
			<div className="bio">
				<h1 className="devName">Peter Dinh</h1>
				<img id="peter" src="http://50.112.42.29/assets/peter.jpg"/>
				<div className="externals">
					<div className="github">
						<a href="https://github.com/petertdinh"><img src="http://50.112.42.29/tech_logos/github_glossy.png" height="100" width="100"/></a>
					</div>
					<div className="linkedin">
						<a href="https://www.linkedin.com/in/petertdinh"><img src="http://50.112.42.29/tech_logos/linkedin_glossy.png" height="135" width="135" /></a>
					</div>
				</div>
				<div className="sell">Favorite Category: Potpourii</div>
				<div className="hire link">
					<Link to="hire/peter" style={{color: "blue", fontSize: "3em", fontFamily: "Swiss-911"}}>
						Hire Peter
					</Link>
				</div>
			</div>
			</div>
		);
	}
}