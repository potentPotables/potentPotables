import { CREATE_GAME, RESET_CLUE_VALUE } from '../actions/index';

export default function(state = {
  categories: null,
  clues: null,
}, action) {
  switch(action.type){
    case CREATE_GAME:
      console.log('gameboard', action.payload)
      return Object.assign(state, action.payload);
    case RESET_CLUE_VALUE:
      var stateClueCopy= {...state.clues[action.payload.id], value: 0};
      var stateCluesCopy= {...state.clues};
      stateCluesCopy[action.payload.id]= stateClueCopy;
      var stateCopy= {...state, clues: stateCluesCopy};
      return stateCopy;
    default:
      return state;
  }
}