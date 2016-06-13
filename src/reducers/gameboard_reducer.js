import { CREATE_GAME } from '../actions/index';

export default function(state = {
  categories: null,
  clues: null,
}, action) {
  switch(action.type){
    case CREATE_GAME:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}