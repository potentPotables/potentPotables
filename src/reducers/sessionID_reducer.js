import { CREATE_SESSION } from '../actions/index';

export default function (state = {
  sessionID: ''
}, action) {
	switch(action.type) {
		case CREATE_SESSION:
			return {...state, sessionID: action.payload};
		default:
			return state;
	}
}