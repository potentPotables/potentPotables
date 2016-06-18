import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div id="about">
        	<div className="stack intro">
        		These were the technologies that were used to create Jeoparty.
        	</div>
        	<img id="stack" src="http://localhost:3000/tech_logos/tech_stack.png" />
        	<div>
        		<ul id="why">
        		<li> We decided to build this app on React to help with the data mutation that our app goes through.</li>
        		<li>Since a lot of our views depend heavily on our applications state, we decided to couple React with Redux, a very small library that implements the Flux architecture to our application.</li>
        		<li>Webpack is a very powerful build tool that bundles up all of our modules and generates it into a single bundled Javascript file.</li>
        		<li>Socket.io provides a trivial approach for us to give real time updates to our users.</li>
        		<li>Our back-end was built on top of node.js and express.js because of its non-blocking and event-driven I/O.</li>
        		<li>MongoDB was used to create and store our game sessions.</li> 
        		<li>To create unit and integrated testing, we used the Chai library. To implement an end-to-end test, we used CasperJS. Both of these tools were powered by the testing paradigm, Mocha.</li>
        		</ul>
        	</div>
        </div>
    );
  }
}
