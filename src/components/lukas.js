import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Chris extends Component {
  render() {
    return (
	    <div className="bio">
	      <h1 className="devName lukas">Lukas Stuart-Fry</h1>
	      <img />
	      <div className="externals">
		      <div className="github">
		          <a href="https://github.com/lstuartfry"><img src="http://50.112.42.29/tech_logos/github.png" height="45" width="120"/></a>
		      </div>
		      <div className="linkedin">
		          <a href="https://www.linkedin.com/in/lukasstuartfry"><img src="http://50.112.42.29/tech_logos/linkedin.png" height="30" width="120"/></a>
		      </div>
	      </div>
	      <div className="sell">Something that screams hire me here.</div>
	      <div className="hire link lukas">
		      <Link to="hire/lukas">
		          Hire Lukas
		      </Link>
	      </div>
	    </div>
    );
  }
}