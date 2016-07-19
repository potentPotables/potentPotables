import React, { Component } from 'react';
import { Link } from 'react-router';
import Bio from './bio';

export default class Chris extends Component {
  render() {
    return (
      <Bio name={"Lukas Stuart-Fry"}
           image={"http://50.112.42.29/assets/lukas.png"}
           github={"https://github.com/lstuartfry"}
           linkedin={"https://www.linkedin.com/in/lukasstuartfry"}
           category={"Zombies Are Coming!"}
           link={"hire/lukas"}/>
    );
  }
}