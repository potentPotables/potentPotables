import React, { Component } from 'react';
import { Link } from 'react-router';
import Bio from './bio';

export default class Chris extends Component {
  render() {
    return (
      <Bio name={"Chris Loncarich"}
           image={"http://50.112.42.29/assets/chris.jpg"}
           github={"https://github.com/Loncarich"}
           linkedin={"https://www.linkedin.com/in/loncarich"}
           category={"An Album Cover"}
           link={"hire/chris"}/>
    );
  }
}