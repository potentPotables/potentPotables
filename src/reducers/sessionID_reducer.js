import { CREATE_SESSION } from '../actions/index';

export default function (state = "", action) {
	switch(action.type) {
		case: CREATE_SESSION:
			return state.concat(action.payload);
		default:
			return state;
	}
}