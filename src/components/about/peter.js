import React, { Component } from 'react';
import { Link } from 'react-router';
import Bio from './bio';

export default class Peter extends Component {
	render() {
		return (
			<Bio name={"Peter Dinh"}
					 image={"http://50.112.42.29/assets/peter.jpg"}
					 github={"https://github.com/petertdinh"}
					 linkedin={"https://linkedin.com/in/petertdinh"}
					 category={"Potpourii"}
					 link={"hire/peter"}/>
		);
	}
}