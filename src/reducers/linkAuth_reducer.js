import { LINK_CODE_AUTH, LINK_CODE_ERROR } from '../actions/index';

export default function(state = {
  linkCode: '',
  linkCodeError: '',
  hostExists: false,
}, action){
  switch(action.type){
    case LINK_CODE_AUTH:
      console.log('inside linkAuth reducer', action.payload);
      if(action.payload.hostExists){ return {...state, linkCode: action.payload.room, hostExists: action.payload.hostExists} }
        return {...state, linkCode: action.payload.room};
      // return {...state, linkCode: action.payload.room, linkCodeError: '', hostExists: action.payload.hostExists};
    case LINK_CODE_ERROR:
      return {...state, linkCodeError: action.payload};
    default:
      return state;
  }
}