import { ACTIVATE_GAME } from '../actions/index';
import { INCORRECT_ANSWER, CORRECT_ANSWER, SKIP_INCORRECT, SKIP, SET_ACTIVE_CLUE, ADD_NEW_USER, DISABLE_BUTTON, SET_ACTIVE_USER, ACTIVATE_BUTTONS } from '../sockets_client';

export default function(state= {
  isGameActive: false,
  activeClue: {},
  activeUser: '',
  users: {},
  hasAnsweredUsers: [],
  answeredClues: {},
  isButtonDisabled: true,
}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      console.log('inside reducer Activate Game', action.payload);
      return {...state, isGameActive: action.payload};
    case ADD_NEW_USER:
      var stateUsersCopy = {...state.users};
      stateUsersCopy= action.payload.users;
      var stateCopy = {...state, users: stateUsersCopy};
      console.log('stateCopy is', stateCopy);
      return stateCopy;
    case DISABLE_BUTTON:
      return {...state, isButtonDisabled: action.payload};
    case SET_ACTIVE_USER:
      return {...state, activeUser: action.payload};
    case SET_ACTIVE_CLUE:
      var answeredCluesCopy= {...state.answeredClues};
      answeredCluesCopy[action.payload.id]= true;
      return {...state, activeClue: action.payload, answeredClues: answeredCluesCopy};
    case ACTIVATE_BUTTONS:
      return {...state, isButtonDisabled: action.payload};
    case INCORRECT_ANSWER:
      var stateUsernameCopy= {...state.users[action.payload.username], score: action.payload.score};
      var stateUsersCopy= {...state.users};
      stateUsersCopy[action.payload.username]= stateUsernameCopy;
      var hasAnsweredCopy = state.hasAnsweredUsers.concat(action.payload.username);
      return {...state, users: stateUsersCopy, hasAnsweredUsers: hasAnsweredCopy, activeUser: '', isButtonDisabled: false};
    case CORRECT_ANSWER:
      var stateUsernameCopy= {...state.users[action.payload.username], score: action.payload.score};
      var stateUsersCopy= {...state.users};
      stateUsersCopy[action.payload.username]= stateUsernameCopy;
      console.log('inside reducer Correct', stateUsersCopy)
      return {...state, users: stateUsersCopy, hasAnsweredUsers: [], activeClue: {}, activeUser: '', isButtonDisabled: true};
    case SKIP_INCORRECT:
      var stateUsernameCopy= {...state.users[action.payload.username], score: action.payload.score};
      var stateUsersCopy= {...state.users};
      stateUsersCopy[action.payload.username]= stateUsernameCopy;
      return {...state, users: stateUsersCopy, activeUser: '', hasAnsweredUsers: [], isButtonDisabled: true, activeClue: {}};
    case SKIP:
      return {...state, activeUser: '', hasAnsweredUsers: [], isButtonDisabled: true, activeClue: {}};
    default:
      return state;
  }
}