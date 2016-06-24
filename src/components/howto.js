import React, { Component } from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


export default class HowTo extends Component {
  render() {
    return (
        <div id="howto" className="animated flipInX">
          <div id="howto">
          	<div className="gyparody animated infinite pulse">
              How to Play the Game
            </div>
              <p>
                Potent Potables is a simple same-room party game that combines the popular trivia game show Jeopardy™ and the Jackbox Party Pack™. For 1-100 players, your phones and your tablets are your controllers! Unless you feel that you're trivia game is strong, we suggest that you form teams to combine trivia knowledge as these questions can be pretty challenging since they're taken from the game show itself.
              </p>
              <div className="gyparody animated infinite pulse">To start up Potent Potables</div>
              <p>AS A HOST:</p>
              <ul>
                <li>On a computer or a laptop, head to our landing page and click on Create a Game. For optimal experience, hook your computer up to a large TV display or projector. This is where all the players will be focusing most of their attention on.</li>
                <li>Then on your mobile device, click on Join a Game and type in the link code provided and check the box to join as the host.</li>
                <li>Once everyone has joined the session, click on Start Game. This will generate the actual Jeopardy™ gameboard with random categories.</li>
                <li>It's your job to control the flow of the game. Your computer will show the gameboard and here you will click on the clues that your contestants choose. Once you click on it, you can choose to read the clue off of your mobile device. After you finish reading the clue, tap on the button and that will enable your contestants buttons. You will also get the answer displayed on your mobile device.</li>
                <li>After a contestant has buzzed in and given their answer, you will mark it as either correct or incorrect. Pressing correct will reward them the appropriate value amount and move the main display back to the gameboard. Incorrect deducts that value from their current score and gives other contestants the chance to buzz in.</li>
              </ul>
              <p>AS A CONTESTANT:</p>
              <ul>
                <li>On your mobile device, click on Join a Game and punch in the link code on the main display.</li>
                <li>Your button is only enabled once the host finishes reading out the clue.</li>
                <li>You or someone in your team knows the answer? Buzz in!</li>
              </ul>
          </div>
        </div>
    );
  }
}
