import { CREATE_GAME } from '../actions/index';

export default function(state={}, action){
  switch(action.payload){
    case CREATE_GAME:
      var newState= {...state};
      newState= action.payload;
      return newState;
    case default:
      return state;
  }
}