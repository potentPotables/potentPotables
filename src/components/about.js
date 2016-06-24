import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
        <div id="about">
          <h2 className="stack intro">
            Technology:
          </h2>
            <div id="stack">
              <img id="react" src="http://52.38.175.65/tech_logos/react.png" height="65" width="65"/>
              <img id="redux" src="http://52.38.175.65/tech_logos/redux.png" height="65" width="65"/>
              <img id="webpack" src="http://52.38.175.65/tech_logos/webpack.png" height="65" width="65"/>
              <img id="socket" src="http://52.38.175.65/tech_logos/socket.png" height="65" width="65"/>
              <img id="node" src="http://52.38.175.65/tech_logos/node.png" height="65" width="65"/>
              <img id="express" src="http://52.38.175.65/tech_logos/express.png" height="65" width="190"/>
              <img id="mongodb" src="http://52.38.175.65/tech_logos/mongodb.png" height="65" width="65"/>
              <img id="chai" src="http://52.38.175.65/tech_logos/chai.png" height="65" width="65"/>
              <img id="mocha" src="http://52.38.175.65/tech_logos/mocha.png" height="65" width="65"/>
              <img id="phantomjs" src="http://52.38.175.65/tech_logos/phanthomjs.png" height="65" width="65"/>
              <img id="casperjs" src="http://52.38.175.65/tech_logos/casper.png" height="140" width="65"/>
              <img id="aws" src="http://52.38.175.65/tech_logos/aws.png" height="65" width="65"/>
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
                <img id="peter" src="http://52.38.175.65/assets/peter.jpg" />
                <div>
                  <Link to="peter">
                    Peter Dinh
                  </Link>
                </div>
              </div>
              <div className="lukas">
                <img id="lukas" src="http://52.38.175.65/assets/lukas.jpg" />
                <div>
                  <Link to="lukas">
                    Lukas Stuart-Fry
                  </Link>
                </div>
              </div>
              <div className="chris">
                <img id="chris" src="http://52.38.175.65/assets/chris.jpg" />
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
