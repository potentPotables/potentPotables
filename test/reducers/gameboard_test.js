import { expect } from '../test_helper';
import gameboardReducer from '../../src/reducers/gameboard_reducer';
import { CREATE_GAME } from '../../src/actions/index';

describe('Gameboard Reducer', () => {

	it('handles actions that are !CREATE_GAME', () => {
		expect(gameboardReducer({}, {})).to.eql({});
	});

	it('handles actions that are CREATE_GAME', () => {
		const action = {type: CREATE_GAME, payload: {categories: [], clues: []}};
		expect(gameboardReducer({}, action)).to.eql({categories: [], clues: []});
	});

})