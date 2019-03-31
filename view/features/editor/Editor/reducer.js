
import { DETAILACTION, PUTRESULTACTION, SAVERESULTACTION } from './actionTypes';

const reducer = (state = { detail: '', putResult: '' , save : ''}, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case DETAILACTION:
      myState.detail = action.info;
      return myState;
    case PUTRESULTACTION:
      myState.putResult = action.info;
    case SAVERESULTACTION:
      myState.save = action.info;
    default:
      return state;
  }
};
export default reducer;
