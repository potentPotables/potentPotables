import { combineReducers } from 'redux';
import sessionID from './sessionID_reducer';
import user from './user_reducer';
import linkAuth from './linkAuth_reducer'

const rootReducer = combineReducers({
	sessionID,
  user,
  linkAuth
});

export default rootReducer;