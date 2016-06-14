import { ACTIVATE_GAME } from '../actions/index';
import { INCORRECT_ANSWER, CORRECT_ANSWER, SKIP, SET_ACTIVE_CLUE, ADD_NEW_USER, DISABLE_BUTTON, SET_ACTIVE_USER } from '../sockets_client';

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
      return {...state, activeClue: action.payload};
    case INCORRECT_ANSWER:
      var stateUsernameCopy= {...state.users[action.payload.username]};
      stateUsernameCopy.score= action.payload.score;
      var stateUsersCopy= {...state.users};
      stateUsersCopy[action.payload.username]= stateUsernameCopy;
      var hasAnsweredCopy = state.hasAnsweredUsers.concat(action.payload);
      return {...state, users: stateUsersCopy, hasAnsweredUsers: hasAnsweredCopy, activeUser: '', isButtonActive: true};
    case CORRECT_ANSWER:
      return {...state, hasAnsweredUsers: []}; //needs additional logic to bring back to gameboard on browser
    case SKIP:
      return {...state}; //needs additional logic to bring back to gameboard on browser
    default:
      return state;
  }
}