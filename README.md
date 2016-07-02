# Potent Potables

Looking to test your trivia knowledge amongst your friends, family, or coworkers?  Give Potent Potables a try!

## Overview

Potent Potables is a simple same-room party game that combines the popular trivia game show Jeopardy™ and the Jackbox Party Pack™. For 1-100 players, your phones and your tablets are your controllers! 

With actual Jeopardy questions provided by **[jservice.io](http://jservice.io/)**, Potent Potables offers an authentic experience for fans of the TV show.

Once a game is created, contestants will browse to **[potentpotables.io](http://potentpotables.io)** on their mobile device and click on Join a Game. They will punch in the link code provided by the main display and that will have them join the session. Super easy to setup and no big mess of controllers needed.

## Play online

1. Visit **http://potentpotables.io**
2. Click on Create a Game. This provides your contestants with a link code where they will be able to join that unique session. For optimal experience, hook this display up to a projector or a big screen TV.
3. A host is required to direct the flow of the game. On their mobile device, have them navigate to the site and join the game as a host.
4. Once contestants have been verified, they will be directed to a page where they will submit their username as well as snap a selfie if they like.
5. Sessions can support any amount of players, feel free to form teams/alliances to combine trivia knowledge!

## Play locally

1. Fork and clone this repo.
2. In your terminal within the root directory, type: **npm install**
3. In two more tabs, type **mongod** in one, and **webpack --watch** in the other
4. In the first tab, type **npm start**
5. Visit **http://localhost:8080/**
6. To simulate mobile contestants with Chrome, head to the DevTools and click on Toggle Device Toolbar and choose your device.

## Developer Documentation

### Tools Used:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Socket.io](http://socket.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

### Front-End(React, Redux, Socket.io)
```
src
├── actions
│   └── index.js
│
├── components
│   ├── about.js
│   ├── app.js
│   ├── categories.js
│   ├── chris.js
│   ├── clue.js
│   ├── clue_view.js
│   ├── end.js
│   ├── gameboard.js
│   ├── hire_chris.js
│   ├── hire_lukas.js
│   ├── hire_peter.js
│   ├── host_answer.js
│   ├── host_category.js
│   ├── host_clue.js
│   ├── host_gameplay.js
│   ├── howto.js
│   ├── info_index.js
│   ├── link_landing.js
│   ├── link_landing_users.js
│   ├── link_verification.js
│   ├── lukas.js
│   ├── peter.js
│   ├── redirect.js
│   ├── scoreboard.js
│   ├── user_config.js
│   └── user_gameplay.js
│ 
├── reducers
│   ├── gameboard_reducer.js
│   ├── gameplay_reducer.js
│   ├── index.js
│   ├── linkAuth_reducer.js
│   ├── sessionID_reducer.js
│   └── user_reducer.js
│ 
├── index.js
├── routes.js
└── sockets_client.js
```
### Front-End Styles
```
styles
├── assets
│   └── fonts
│   |   ├── gyparody.woff
│   |   ├── gyparody.woff2
│   |   ├── Korinna_Bold_BT.ttf
│   |   ├── Korinna_Bold_BT.woff
│   |   ├── Korinna_Bold_BT.woff2
│   |   ├── Swiss_911_Compressed.ttf
│   |   ├── Swiss_911_Compressed.woff
│   |   ├── Swiss_911_Compressed.woff2
│   |   ├── Swiss_911_Extra_Compressed.woff
│   |   └── Swiss_911_Extra_Compressed.woff2
│   |
|   ├── chris.jpg
|   ├── custom_pointer.png
|   ├── gameboard_background.gif
|   ├── logo.png
|   ├── lukas.jpg
|   ├── neon_cursor.png
|   ├── peter.jpg
|   └── user-gameplay_bckground.jpg
├── tech_logos
│   ├── aws.png
│   ├── casper.png
│   ├── chai.png
│   ├── express.png
│   ├── github.png
│   ├── github_glossy.png
│   ├── linkedin.png
│   ├── linkedin_glossy.png
│   ├── mocha.png
│   ├── mongodb.png
│   ├── nodejs.png
│   ├── phantomjs.png
│   ├── react.png
│   ├── redux.png
│   ├── socket.png
│   └── webpack.png
|
├── animate.css
├── favicon.ico
├── game_buzz.wav
├── scrape.json
└── style.css
````
### Back-End(Node, Express, MongoDB, Socket.io)
````
server
├── controllers
|   ├── checksession.js
|   ├── closesession.js
|   └── verifycode.js
├── models
|   └── session.js
├── router.js
├── sendgrid.js
├── server.js
└── sockets_server.js
````
