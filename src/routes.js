import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import InfoIndex from './components/info_index';
import LinkLanding from './components/link_landing';
import LinkVerification from './components/link_verification';
import UserConfig from './components/user_config';
import UserGameplay from './components/user_gameplay';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={InfoIndex} />
    <Route path="linklanding" component={LinkLanding} />
    <Route path="linkverification" component={LinkVerification} />
    <Route path="userconfig" component={UserConfig} />
    <Route path="usergameplay" component={UserGameplay} />
    <Route path="hostgameplay" component={} />
    <Route path="gameboard" component={} />
	</Route>
)