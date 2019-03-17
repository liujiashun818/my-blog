
import { DETAILACTION, PUTRESULTACTION } from './actionTypes';

const reducer = (state = { detail: '', putResult: '' }, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case DETAILACTION:
      myState.detail = action.info;
      return myState;
    case PUTRESULTACTION:
      myState.putResult = action.info;
    default:
      return state;
  }
};
export default reducer;
