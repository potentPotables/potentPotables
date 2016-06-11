import { CREATE_GAME } from '../actions/index';

export default function(state= {
  category1: {},
  category2: {},
  category3: {},
  category4: {}
}, action) {
  switch(action.payload){
    case CREATE_GAME:
      var newState = {...state};
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}