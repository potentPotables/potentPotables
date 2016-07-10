import React, { Component } from 'react';


const HostCategory = (props) => (
	<div className="hostCategory" onClick={() => {props.setActiveClues(props.clues)}}>{props.category.toUpperCase()}</div>
);

export default HostCategory;