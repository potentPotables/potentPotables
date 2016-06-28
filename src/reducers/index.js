import { combineReducers } from 'redux';
import sessionID from './sessionID_reducer';
import user from './user_reducer';
import linkAuth from './linkAuth_reducer';
import gameboard from './gameboard_reducer';
import gameplay from './gameplay_reducer';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
	sessionID,
  user,
  form,
  linkAuth,
  gameboard,
  gameplay
});

export default rootReducer;