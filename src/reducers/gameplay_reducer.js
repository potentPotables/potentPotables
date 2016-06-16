import { ACTIVATE_GAME, GAMEBOARD_SWITCH } from '../actions/index';
import { INCORRECT_ANSWER, CORRECT_ANSWER, SKIP, SET_ACTIVE_CLUE, ADD_NEW_USER, DISABLE_BUTTON, SET_ACTIVE_USER, ACTIVATE_BUTTONS } from '../sockets_client';

export default function(state= {
  isGameActive: false,
  activeClue: {},
  activeUser: '',
  users: {},
  hasAnsweredUsers: [],
  isButtonDisabled: true,
  isGameboardLive: false
}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      console.log('inside reducer Activate Game', action.payload);
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
      return {...state, activeClue: action.payload.currentClue};
    case ACTIVATE_BUTTONS:
      return {...state, isButtonDisabled: action.payload};
    case INCORRECT_ANSWER:
      var stateUsernameCopy= {...state.users[action.payload.username], score: action.payload.score};
      var stateUsersCopy= {...state.users};
      stateUsersCopy[action.payload.username]= stateUsernameCopy;
      var hasAnsweredCopy = state.hasAnsweredUsers.concat(action.payload);
      return {...state, users: stateUsersCopy, hasAnsweredUsers: hasAnsweredCopy, activeUser: '', isButtonDisabled: false};
    case CORRECT_ANSWER:
    console.log('inside CORRECT_ANSWER');
      return {...state, hasAnsweredUsers: [], activeClue: {}, isGameboardLive: true}; //needs additional logic to bring back to gameboard on browser
    case SKIP:
      return {...state, activeUser: action.payload.activeUser, isButtonDisabled: action.payload.isButtonClicked, activeClue: {}};
    case GAMEBOARD_SWITCH:
      return {...state, isGameboardLive: action.payload};
    default:
      return state;
  }
}