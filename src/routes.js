import React from 'react';
import { React, IndexRoute } from 'react-router';

import App from './components/app';
import InfoIndex from './components/info_index';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={InfoIndex} />
	</Route>
)