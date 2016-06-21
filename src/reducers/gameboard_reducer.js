import { CREATE_GAME} from '../actions/index';

export default function(state = {
  categories: null,
  clues: null,
}, action) {
  switch(action.type){
    case CREATE_GAME:
      console.log('gameboard', action.payload)
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}