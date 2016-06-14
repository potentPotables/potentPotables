import axios from 'axios';
import { browserHistory } from 'react-router';
import { joinRoom, createUsernameSockets, incorrect, correct, skip, startGame } from '../sockets_client';

export const CREATE_SESSION = 'CREATE_SESSION';
export const SET_USER_TYPE= 'SET_USER_TYPE';
export const CREATE_USERNAME= 'CREATE_USERNAME';
export const LINK_CODE_AUTH= 'LINK_CODE_AUTH';
export const LINK_CODE_ERROR= 'LINK_CODE_ERROR';
export const CREATE_GAME= 'CREATE_GAME';
export const ACTIVATE_GAME= 'ACTIVATE_GAME';
export const SET_ACTIVE_CLUE= 'SET_ACTIVE_CLUE';

export function createSession() {
  return function(dispatch){
    axios.post('/create')
      .then( response => {
        dispatch({type: CREATE_SESSION, payload: response});
        browserHistory.push('/linklanding');
      })
  }
}

export function setUserType(value) {
  return {
    type: SET_USER_TYPE,
    payload: value
  }
}

export function linkCodeVerification({linkcode}) {
  return function(dispatch, getState){
    axios.post('/linkcode', {linkcode})
      .then(response => {
        const currentState= getState();
        currentState.user.userType !== 'host' ? browserHistory.push('/userconfig') : browserHistory.push('/hostgameplay');
        joinRoom(response.data.room);
        dispatch({type: LINK_CODE_AUTH, payload: response.data.room})
      })
      .catch(response => {
        console.log('error REsponse', response);
        dispatch({type: LINK_CODE_ERROR, payload: response.data.error});
      })
  }
}

export function createUsername(username) {
  return function(dispatch, getState){
        const currentState = getState();
        dispatch({type: CREATE_USERNAME, payload: username});
        createUsernameSockets(username, currentState.linkAuth.linkCode);
        browserHistory.push('/usergameplay');
  }
}

export function fetchGame(){
  return function(dispatch){
    axios.post('/game')
      .then(response => {
        dispatch({type: CREATE_GAME, payload: response.data.clues});
        startGame(response.data.room);
        browserHistory.push('/gameboard');
      })
      .catch(response => {
        console.log(response);
      })
  }
}

// if we don't use dispatch here, we won't create this action at all.  we'll have to import the
// activeClue function from sockets_client into the view
export function setActiveClue({clue}) {
  return function(dispatch) {
    // dispatch({type: SET_ACTIVE_CLUE, payload: clue});
    activeClue(clue);
    browserHistory.push('/clue');

  }
}

export function declareIncorrect(username) {
  return function(){
    incorrect(username);
  }
}

export function declareCorrect(username) {
  return function(){
    correct(username);
  }
}

export function skipClue() {
  return function(){
    skip();
  }
}

