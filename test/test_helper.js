import jsdom from 'jsdom';
import _$ from 'jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html');
global.window = global.document.defaultView;
const $ = _$(global.window);

