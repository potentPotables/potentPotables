import React, { Component } from 'react';


const HostCategory = (props) => (
	<div className="hostCategory button1 a" onClick={() => {props.setActiveClues(props.clues)}}>{props.category.toUpperCase()}</div>
);

export default HostCategory;