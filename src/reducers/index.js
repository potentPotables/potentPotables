import { combineReducers } from 'redux';
import sessionID from './sessionID_reducer';
import user from './user_reducer';
import linkAuth from './linkAuth_reducer';
import gameboard from './gameboard_reducer';


const rootReducer = combineReducers({
	sessionID,
  user,
  linkAuth,
  gameboard
});

export default rootReducer;