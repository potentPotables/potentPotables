import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Chris extends Component {
  render() {
    return (
      <div className="bio">
        <h1>Chris Loncarich</h1>
        <img />
        <div>
            <a href="https://github.com/Loncarich"><img src="http://52.38.175.65:3000/tech_logos/github.png" height="45" width="120"/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/loncarich"><img src="http://52.38.175.65:3000/tech_logos/linkedin.png" height="30" width="120"/></a>
        </div>
        <div>Something that screams hire me here.</div>
        <Link to="hire/chris">
            Hire Chris
        </Link>
      </div>
    );
  }
}