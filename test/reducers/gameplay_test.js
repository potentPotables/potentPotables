import { expect } from '../test_helper';
import gameplayReducer from '../../src/reducers/gameplay_reducer';
import { ACTIVATE_GAME } from '../../src/actions/index';
import { INCORRECT_ANSWER, CORRECT_ANSWER, SKIP_INCORRECT, SKIP, SET_ACTIVE_CLUE, ADD_NEW_USER, DISABLE_BUTTON, SET_ACTIVE_USER, ACTIVATE_BUTTONS } from '../../src/sockets_client';

describe('Gameplay Reducer', () => {

	it('handles actions that are INCORRECT_ANSWER', () => {
		let action = {type: INCORRECT_ANSWER, payload: {username: 'player', score: -200}};
		expect(gameplayReducer({
  users: {},
  hasAnsweredUsers: [],
  isButtonDisabled: true,
}, action)).to.eql({users: {player: {username: 'player', score: -200, photo: ""}}, hasAnsweredUsers: ['player'], activeUser: '', isButtonDisabled: false});
	});

	it('handles actions that are CORRECT_ANSWER', () => {
		let action = {type: CORRECT_ANSWER, payload: {username: 'player', score: 200}}
		expect(gameplayReducer({
			users: {},
		}, action)).to.eql({users: {player: {username: 'player', score: 200, photo: ""}}, hasAnsweredUsers: [], activeClue: {}, activeUser: '', isButtonDisabled: true});
	});

	it('handles actions that are SKIP_INCORRECT', () => {
		let action = {};
		expect(gameplayReducer)
	})
})