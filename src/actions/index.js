import axios from 'axios';
import { browserHistory } from 'react-router';

export const CREATE_SESSION = 'CREATE_SESSION';
export const SET_USER_TYPE= 'SET_USER_TYPE';
export const CREATE_USERNAME= 'CREATE_USERNAME';
export const LINK_CODE_AUTH= 'LINK_CODE_AUTH';
export const LINK_CODE_ERROR= 'LINK_CODE_ERROR';

export function createSession() {
  return function(dispatch){
    axios.get('/create')
      .then( response => {
        dispatch({type: CREATE_SESSION, payload: response})
      })
  }
}

export function setUserType(value) {
  return {
    type: SET_USER_TYPE,
    payload: value
  }
}

export function linkCodeVerifcation({linkcode}) {
  return function(dispatch, getState){
    axios.post('/linkcode', {linkcode})
      .then(response => {
        const currentState= getState();
        currentState.user.userType === 'host' ? browserHistory.push('/playerconfig') : browserHistory.push('/host');
        dispatch({type: LINK_CODE_AUTH, payload: response.data.linkcode})
      })
      .catch(response => {
        dispatch({type: LINK_CODE_ERROR, payload: response.data.error});
      })
  }
}

export function createUsername({username}) {
  return function(dispatch){
    axios.post('/username', {username})
      .then(response => {
        dispatch({type: CREATE_USERNAME, payload: response.data.username});
      })
      .catch(response => {
        console.log(response);
      });
  }
}