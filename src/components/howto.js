import React, { Component } from 'react';

export default class HowTo extends Component {
  render() {
    return (
        <div id="howto">
          <div id="howto">
          	<h3>
              How to Play the Game:
            </h3>
              <p>
                Jeoparty is a simple same-room party game that combines the popular trivia game show Jeopardy™ and the Jackbox Party Pack™. For 1-100 players, your phones and your tablets are your controllers! Feel free to use a laptop as well!
              </p>
              <h4>To start up Jeoparty:</h4>
              <p>As a host:</p>
              <ul>
                <li>On a computer or a laptop, head to our landing page and click on Create a Session. For optimal experience, hook your computer up to a large TV display or projector.</li>
                <li>Then on your mobile device, click on Join a Session and type in the link code provided and check the box to join as the host.</li>
                <li>Once everyone has joined the session, click on Start Game. This will generate the actual Jeopardy™ gameboard with random categories.</li>
                <li>It's your job to control the flow of the game. Your computer will show the gameboard and here you will click on the clues that your contestants choose. Once you click on it, you can choose to read the clue off of your mobile device. After you finish reading the clue, tap on the button and that will enable your contestants buttons.</li>
                <li>After a contestant has buzzed in and given their answer, you will mark it as either correct or incorrect. Pressing correct will reward them the appropriate value amount and move the main display back to the gameboard. Incorrect deducts that value from their current score and gives other contestants the chance to buzz in.</li>
              </ul>
              <p>As a contestant:</p>
              <ul>
                <li>On your mobile device, click on Join a Session and punch in the link code on the main display.</li>
                <li>Your button is only enabled once the host finishes reading out the clue.</li>
                <li>Buzz in!</li>
              </ul>
          </div>
        </div>
    );
  }
}
