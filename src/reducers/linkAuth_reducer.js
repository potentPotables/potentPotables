import { LINK_CODE_AUTH, LINK_CODE_ERROR } from '../actions/index';

export default function(state = {
  linkCode: '',
  linkCodeError: '',
  hostExists: false,
}, action){
  switch(action.type){
    case LINK_CODE_AUTH:
      return {...state, linkCode: action.payload};
    case LINK_CODE_ERROR:
      return {...state, linkCodeError: action.payload};
    default:
      return state;
  }
}