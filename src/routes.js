import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import InfoIndex from './components/info_index';
import LinkLanding from './components/link_landing';
import LinkVerification from './components/link_verification';
import UserConfig from './components/user_config';
import UserGameplay from './components/user_gameplay';
import HostGameplay from './components/host_gameplay';
import ClueView from './components/clue_view';
import HostAnswer from './components/host_answer';
import Gameboard from './components/gameboard';
import Scoreboard from './components/scoreboard';
import End from './components/end';
import HowTo from './components/howto';
import About from './components/about';
import Peter from './components/peter';
import Chris from './components/chris';
import Lukas from './components/lukas';
import HirePeter from './components/hire_peter';
import HireLukas from './components/hire_lukas';
import HireChris from './components/hire_chris';

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
      <Route path="peter" component={Peter} />
      <Route path="chris" component={Chris} />
      <Route path="lukas" component={Lukas} />
      <Route path="hire/peter" component={HirePeter} />
      <Route path="hire/lukas" component={HireLukas} />
      <Route path="hire/chris" component={HireChris} />
	</Route>
)