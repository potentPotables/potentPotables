import axios from 'axios';
import { browserHistory } from 'react-router';

export const CREATE_SESSION = 'CREATE_SESSION';

export function createSession() {
	var response = axios.get('/create');
	return {
		type: CREATE_SESSION,
		payload: response
	};
}