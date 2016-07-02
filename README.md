# Potent Potables

Looking to test your trivia knowledge amongst your friends, family, or coworkers?  Give Potent Potables a try!

## Overview

Potent Potables is a simple same-room party game that combines the popular trivia game show Jeopardy™ and the Jackbox Party Pack™. For 1-100 players, your phones and your tablets are your controllers! 

With actual Jeopardy questions provided by **[jservice.io](http://jservice.io/)**, Potent Potables offers an authentic experience for fans of the TV show.

Once a game is created, contestants will browse to **potentpotables.io** on their mobile device and click on Join a Game. They will punch in the link code provided by the main display and that will have them join the session. Super easy to setup and no big mess of controllers needed.

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

### Front-End(ReactJS)
```
src
├── actions
│   └── index.js
│
├── components
│   ├── auth.conroller.js
│   ├── auth.factory.js
│   ├── auth.html
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├──
│   ├── battlefield.controller.js
│   ├── battlefield.factory.js
│   ├── battlefield.html
│   ├── battlefieldLogic.factory.js
│   └── battlefieldTimer.factory.js
│ 
├── lobby
│   ├── chat.factory.js
│   ├── lobby.controller.js
│   ├── lobby.factory.js
│   ├── lobby.html
│   ├── lobbyListeners.factory.js
│   └── stats.factory.js
│ 
├── shared
│   └── socket.factory.js
│ 
├── sound
│   └── sound.factory.js
│ 
├── ui-router
│   └── app.config.js
│ 
├── waiting
│   ├── waiting.controller.js
│   ├── waiting.factory.js
│   ├── waiting.html
│   └── waitingListeners.factory.js
│ 
├── app.controller.js
└── app.module.js
```
