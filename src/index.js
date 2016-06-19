import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers';
import { initSockets } from './sockets_client';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

initSockets(store);

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
  </MuiThemeProvider>
	, document.querySelector('.container')
)