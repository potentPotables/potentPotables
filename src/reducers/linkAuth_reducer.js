import { LINK_CODE_AUTH, LINK_CODE_ERROR } from '../actions/index';

export default function(state = {
  linkCode: '',
  linkCodeError: ''
}, action){
  switch(action.type){
    case LINK_CODE_AUTH:
      return {...state, linkCode: action.payload, linkCodeError: ''};
    case LINK_CODE_ERROR:
      return {...state, linkCodeError: action.payload};
    default:
      return state;
  }
}