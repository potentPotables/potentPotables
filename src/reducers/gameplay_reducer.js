import { ACTIVATE_GAME } from '../actions/index';
import { CREATE_NEW_USER } from '../sockets_client';

export default function(state= {
  isGameActive: false,
  activeClue: {},
  activeUser: '',
  users: {},
  hasAnsweredUsers: [],
  isButtonActive: true,
  isPlayLive: false
}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      return {...state, isGameActive: action.payload};
    case CREATE_NEW_USER:
      var stateUsersCopy = {...state.users};
      stateUsersCopy.username = {username: action.payload, score: 0};
      var stateCopy = {...state};
      stateCopy.users = stateUsersCopy;
      return stateCopy;
    default:
      return state
  }
}