import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Bio extends Component {
	render() {
		return (
			<div className="bioContainer">
				<div className="bio">
					<h1 className="devName">{this.props.name}</h1>
					<img id="peter" src={this.props.image}/>
					<div className="externals">
						<div className="github">
							<a href={this.props.github}><img src="http://50.112.42.29/tech_logos/github_glossy.png" height="100" width="100"/></a>
						</div>
						<div className="linkedin">
							<a href={this.props.linkedin}><img src="http://50.112.42.29/tech_logos/linkedin_glossy.png" height="135" width="135" /></a>
						</div>
					</div>
					<div className="sell">Favorite Category: {this.props.category}</div>
					<div className="hire link">
						<Link to={this.props.link} style={{color: "blue", fontSize: "3em", fontFamily: "Swiss-911"}}>
							Hire {this.props.name.substring(0, 5)}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}