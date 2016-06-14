import { ACTIVATE_GAME } from '../actions/index';
import { ADD_NEW_USER,
         DISABLE_BUTTON,
         SET_ACTIVE_USER } from '../sockets_client';
import { CREATE_NEW_USER } from '../sockets_client';
import { SET_ACTIVE_CLUE } from '../sockets_client';

export default function(state= {
  isGameActive: false,
  activeClue: {},
  activeUser: '',
  users: {},
  hasAnsweredUsers: [],
  isButtonDisabled: false,
  isPlayLive: false
}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      return {...state, isGameActive: action.payload};
    case ADD_NEW_USER:
      var stateUsersCopy = {...state.users};
      stateUsersCopy= action.payload;
      var stateCopy = {...state, users: stateUsersCopy};
      return stateCopy;
    case DISABLE_BUTTON:
      return {...state, isButtonDisabled: action.payload};
    case SET_ACTIVE_USER:
      return {...state, activeUser: action.payload};
    case SET_ACTIVE_CLUE:
      return {...state, activeClue: action.payload};
    default:
      return state;
  }
}