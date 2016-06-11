import { ACTIVATE_GAME } from '../actions/index';

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
      return {...state, isGameActive: action.payload}
    default:
      return state
  }
}