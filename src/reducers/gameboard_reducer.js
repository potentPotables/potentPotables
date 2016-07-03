import { CREATE_GAME} from '../actions/index';

export default function( state = {
  categories: null,
  clues: null,
}, action) {
  switch(action.type){
    case CREATE_GAME:
      return {...state, categories: action.payload.categories, clues: action.payload.clues};
    default:
      return state;
  }
}