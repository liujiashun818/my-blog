import { ARTICLESTATE } from './actionTypes';

const reducer = (state = { articleState: '' }, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case ARTICLESTATE:
      myState.articleState = action.info;
      return myState;
    default:
      return state;
  }
};
export default reducer;
