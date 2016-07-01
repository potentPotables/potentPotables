var request = require('supertest')('http://localhost:8080');
const express = require('express');
import { expect } from '../test_helper';

var app = express();

describe('POST /create', () => {

	it('creates a new session', () => {
		request.post('/create')
			.expect(201)
			.expect(Object.keys(res).length).to.equal(2)
			.expect(res.code).to.exist
			.expect(res.code.length).to.equal(5)
			.expect(res.hostExists).to.be(false);
	});

});

describe('POST /linkcode', () => {

	it('returns err if no code is found', () => {
		request.post('/linkcode', {linkcode: 'farse', user: null})
			.expect(422)
			.expect(res.error).to.exist;
	});

	it('changes hostExists to false', () => {
		request.post('/linkcode', {linkcode: '5sd26', user: 'host'})
			.expect(res.hostExists).to.be(true);
	});

	it('responds with code', () => {
		request.post('/linkcode', {linkcode: '5sd26', user: 'player'})
			.expect(200)
			.expect(res.code).to.be('5sd26');
	});
})