import { combineReducers } from 'redux';
import sessionID from './sessionID_reducer';

const rootReducer = combineReducers({
	sessionID,
});

export default rootReducer;