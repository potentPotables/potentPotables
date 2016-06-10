import { SET_USER_TYPE } from '../action/index';

export default function (state= {
  userType: ''
}, action) {
  switch(action.type){
    case SET_USER_TYPE:
      return {...state, userType: action.payload}
    default:
      return state;
  }
}