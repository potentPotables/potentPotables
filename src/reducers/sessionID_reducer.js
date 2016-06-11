import { CREATE_SESSION } from '../actions/index';

export default function (state = "", action) {
	switch(action.type) {
		case CREATE_SESSION:
			return state.concat(action.payload.data.session.code);
		default:
			return state;
	}
}