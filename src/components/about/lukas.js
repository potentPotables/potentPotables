import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Chris extends Component {
  render() {
    return (
    	<div className="bioContainer">
	    <div className="bio">
	      <h1 className="devName">Lukas Stuart-Fry</h1>
	      <img />
	      <div className="externals">
		      <div className="github">
		          <a href="https://github.com/lstuartfry"><img src="http://50.112.42.29/tech_logos/github_glossy.png" height="100" width="100"/></a>
		      </div>
		      <div className="linkedin">
		          <a href="https://www.linkedin.com/in/lukasstuartfry"><img src="http://50.112.42.29/tech_logos/linkedin_glossy.png" height="135" width="135" /></a>
		      </div>
	      </div>
	      <div className="sell">Something that screams hire me here.</div>
	      <div className="hire link animated infinite pulse">
		      <Link to="hire/lukas" style={{color: "blue", fontSize: "3em", fontFamily: "Swiss-911"}}>
		          Hire Lukas
		      </Link>
	      </div>
	    </div>
	    </div>
    );
  }
}