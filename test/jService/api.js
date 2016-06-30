const request = require('supertest');
const express = require('express');
import { expect } from '../test_helper';

var app = express();

describe('POST /game', () => {

	it('respond with json', () => {
		request(app)
			.post('/game')
			.expect('Content-Type', /json/)
			.expect(200);
			.end((err) => {
				if (err) { return console.log(err); }
			})
	})
})