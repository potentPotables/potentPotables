import { LINK_CODE_AUTH, LINK_CODE_ERROR, START_GAME_ERROR } from '../actions/index';

export default function(state = {
  linkCode: '',
  linkCodeError: '',
  hostExists: false,
  startGameError: '',
}, action){
  switch(action.type){
    case LINK_CODE_AUTH:
      return {...state, linkCode: action.payload};
    case LINK_CODE_ERROR:
      return {...state, linkCodeError: action.payload};
    case START_GAME_ERROR:
      return {...state, startGameError: action.payload};
    default:
      return state;
  }
}