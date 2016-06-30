const request = require('supertest');
const express = require('express');
import { expect } from '../test_helper';

var app = express();

describe('GET /', () => {

	it('respond with index.html', (res) => {
		request(app)
			.get('/')
			.expect('200')
			.expect(res).to.be('index.html');
	});
});

describe('GET /bundle.js', () => {
	it('respond with bundle.js' (res) => {
		request(app)
			.get('/')
			.expect('200')
			.expect(res).to.be('bundle.js');
	});
});