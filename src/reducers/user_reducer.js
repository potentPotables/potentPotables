import { SET_USER_TYPE, CREATE_USERNAME } from '../actions/index';

export default function(state = {
  userType: '',
  username: '',
  photo: ''
}, action) {
  switch(action.type){
    case SET_USER_TYPE:
      return {...state, userType: action.payload};
    case CREATE_USERNAME:
      return {...state, username: action.payload.username, photo: action.payload.photo};
    default:
      return state;
  }
}