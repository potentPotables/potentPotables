import React, { Component } from 'react';

export default class HowTo extends Component {
  render() {
    return (
        <div id="howto" className="animated flipInX">
          	<div className="gyparody">
              What is Potent Potables?
            </div>
              <p>
                Potent Potables is a simple same-room party game that combines the popular trivia game show Jeopardy™ and the Jackbox Party Pack™. For 1-100 players, your phones and your tablets are your controllers! Offering actual questions from the TV show itself, Potent Potables provides an authentic experience for fans of the show.
              </p>
              <div className="gyparody">How to Play the Game</div>
              <p>AS A HOST:</p>
              <ul>
                <li>Create a game! For optimal experience, hook your computer up to a larger display.</li>
                <li>On your mobile device, click on Join a Game and type in the link code provided and check the box to join as the host.</li>
                <li>Once everyone has joined the session, click on Start Game. This will generate the actual Jeopardy™ gameboard with random categories.</li>
                <li>You can select the clues from your mobile. Doing so will update the main display.</li> 
                <li>Once you clicked on a clue, read it off. After you finish reading the clue, enable the contestants so they can buzz in.</li> 
                <li>After a contestant has buzzed in and given their answer, you will mark it as either correct or incorrect.</li>
              </ul>
              <p>AS A CONTESTANT:</p>
              <ul>
                <li>On your mobile device, click on Join a Game and punch in the link code provided on the main display.</li>
                <li>Your button is only enabled once the host finishes reading out the clue.</li>
                <li>You or someone in your team knows the answer? Buzz in!</li>
              </ul>
        </div>
    );
  }
}
