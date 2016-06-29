import React, { Component } from 'react';
import { Link } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class About extends Component {
  render() {
    return (
        <div id="about">
          <h2 className="stack intro">
            Technology:
          </h2>
            <div id="stack">
              <img className="logo" id="react" src="http://50.112.42.29/tech_logos/react.png" height="65" width="65"/>
              <img className="logo" id="redux" src="http://50.112.42.29/tech_logos/redux.png" height="65" width="65"/>
              <img className="logo" id="webpack" src="http://50.112.42.29/tech_logos/webpack.png" height="65" width="65"/>
              <img className="logo" id="socket" src="http://50.112.42.29/tech_logos/socket.png" height="65" width="65"/>
              <img className="logo" id="node" src="http://50.112.42.29/tech_logos/nodejs.png" height="65" width="65"/>
              <img className="logo" id="express" src="http://50.112.42.29/tech_logos/express.png" height="55" width="205"/>
              <img className="logo" id="mongodb" src="http://50.112.42.29/tech_logos/mongodb.png" height="65" width="65"/>
              <img className="logo" id="chai" src="http://50.112.42.29/tech_logos/chai.png" height="65" width="65"/>
              <img className="logo" id="mocha" src="http://50.112.42.29/tech_logos/mocha.png" height="65" width="65"/>
              <img className="logo" id="phantomjs" src="http://50.112.42.29/tech_logos/phantomjs.png" height="65" width="65"/>
              <img className="logo" id="casperjs" src="http://50.112.42.29/tech_logos/casper.png" height="80" width="65"/>
              <img className="logo" id="aws" src="http://50.112.42.29/tech_logos/aws.png" height="65" width="125"/>
            </div>
          <div>
            <ul className="why">
              <li> We decided to build this app on React to help with the data mutation that our app goes through. It also doesn't hurt that it's a pretty simple framework.</li>
              <li>Since a lot of our views depend heavily on our applications state, we decided to couple React with Redux, a very small library that implements the Flux architecture to our application.</li>
              <li>Webpack is a very powerful build tool that bundles up all of our modules and generates it into a single bundled Javascript file. It also serves as a great tool to debug syntax errors within our code.</li>
              <li>Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.</li>
              <li>Our back-end was built on top of node.js and express.js because of its non-blocking and event-driven I/O.</li>
              <li>MongoDB was used to create and store our game sessions.</li>
              <li>To create unit and integrated testing, we used the Chai library. To implement an end-to-end test, we used CasperJS. Both of these tools were powered by the testing paradigm, Mocha.</li>
            </ul>
          </div>
          <div>
            <h2 className="developers">
              The Developers:
            </h2>
            <div className="parent">
              <div className="peter">
                <img id="peter" src="http://50.112.42.29/assets/peter.jpg" />
                <div>
                  <Link to="peter">
                    Peter Dinh
                  </Link>
                </div>
              </div>
              <div className="lukas">
                <img id="lukas" src="http://50.112.42.29/assets/lukas.jpg" />
                <div>
                  <Link to="lukas">
                    Lukas Stuart-Fry
                  </Link>
                </div>
              </div>
              <div className="chris">
                <img id="chris" src="http://50.112.42.29/assets/chris.jpg" />
                <div>
                  <Link to="chris">
                    Chris Loncarich
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
