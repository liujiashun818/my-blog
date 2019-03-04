import { DETAILACTION } from './actionTypes';

const reducer = (state = { detail: {} }, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case DETAILACTION:
      myState.detail = action.info;
      return myState;
    default:
      return state;
  }
};
export default reducer;
