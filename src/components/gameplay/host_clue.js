import React, { Component } from 'react';


const HostClue = (props) => (
	<div className="hostClue button1 a" onClick={() => {props.setActiveClue(props.room, props.clue)}}>{props.clue.value}</div>
);

export default HostClue;