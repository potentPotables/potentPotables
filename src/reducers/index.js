import { combineReducers } from 'redux';
import sessionID from './sessionID_reducer';

const rootReducer = combineReducer({
	sessionID,
});

export default rootReducer;