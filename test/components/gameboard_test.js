import { renderComponent, expect } from '../test_helper';
import Gameboard from '../../src/components/gameboard';

describe('Gameboard', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(Gameboard);
	});

	it('has categories', () => {
		expect(component.find('thead')).to.exist;
	});

	it('has six categories', () => {
		expect(component.find('th').length).to.equal(6);
	});

});