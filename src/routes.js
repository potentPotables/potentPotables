import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import InfoIndex from './components/landing';
import LinkLanding from './components/linkcode/link_landing';
import LinkVerification from './components/linkcode/link_verification';
import UserConfig from './components/gameplay/user_config';
import UserGameplay from './components/gameplay/user_gameplay';
import HostGameplay from './components/gameplay/host_gameplay';
import ClueView from './components/gameplay/clue_view';
import HostAnswer from './components/gameplay/host_answer';
import Gameboard from './components/gameplay/gameboard';
import Scoreboard from './components/gameplay/scoreboard';
import End from './components/gameplay/end';
import HowTo from './components/howto/howto';
import About from './components/about/about';
import Credits from './components/credits';
import Peter from './components/about/peter';
import Chris from './components/about/chris';
import Lukas from './components/about/lukas';
import HirePeter from './components/about/hire_peter';
import HireLukas from './components/about/hire_lukas';
import HireChris from './components/about/hire_chris';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={InfoIndex} />
      <Route path="linklanding" component={LinkLanding} />
      <Route path="linkverification" component={LinkVerification} />
      <Route path="userconfig" component={UserConfig} />
      <Route path="usergameplay" component={UserGameplay} />
      <Route path="hostgameplay" component={HostGameplay} />
      <Route path="clue_view" component={ClueView} />
      <Route path="hostanswer" component={HostAnswer} />
      <Route path="gameboard" component={Gameboard} />
      <Route path="scoreboard" component={Scoreboard} />
      <Route path="end" component={End} />
      <Route path="howto" component={HowTo} />
      <Route path="about" component={About} />
      <Route path="credits" component={Credits} />
      <Route path="peter" component={Peter} />
      <Route path="chris" component={Chris} />
      <Route path="lukas" component={Lukas} />
      <Route path="hire/peter" component={HirePeter} />
      <Route path="hire/lukas" component={HireLukas} />
      <Route path="hire/chris" component={HireChris} />
	</Route>
)