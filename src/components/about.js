import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
        <div id="about">
          <h2 className="stack intro">
            These were the technologies that were used to create Jeoparty.
          </h2>
            <div id="stack">
             <img src="../../public/tech_logos/tech_stack.png" />
            </div>
          <div>
            <ul className="why">
              <li> We decided to build this app on React to help with the data mutation that our app goes through. It also doesn't hurt that it's a pretty simple framework.</li>
              <li>Since a lot of our views depend heavily on our applications state, we decided to couple React with Redux, a very small library that implements the Flux architecture to our application.</li>
              <li>Webpack is a very powerful build tool that bundles up all of our modules and generates it into a single bundled Javascript file. It also serves as a great debugging tool.</li>
              <li>Socket.io provides a trivial approach for us to give real time updates to our users.</li>
              <li>Our back-end was built on top of node.js and express.js because of its non-blocking and event-driven I/O.</li>
              <li>MongoDB was used to create and store our game sessions.</li>
              <li>To create unit and integrated testing, we used the Chai library. To implement an end-to-end test, we used CasperJS. Both of these tools were powered by the testing paradigm, Mocha.</li>
            </ul>
          </div>
          <div>
            <h2>
              The Developers:
            </h2>
            <div>
            </div>
            <span className="peter">
              <img id="peter" src="../../public/assets/peter.jpg" />
              <div>
                <Link to="peter">
                  Peter Dinh
                </Link>
              </div>
            </span>
            <span className="lukas">
              <img id="lukas" src="../../public/assets/lukas.jpg" />
              <div>
                <Link to="lukas">
                  Lukas Stuart-Fry
                </Link>
              </div>
            </span>
            <span className="chris">
              <img id="chris" src="../../public/assets/chris.jpg" />
              <div>
                <Link to="chris">
                  Chris Loncarich
                </Link>
              </div>
            </span>
          </div>
        </div>
    );
  }
}
