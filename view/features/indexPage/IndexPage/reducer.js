import { GETARTICLE } from './actionTypes';

const reducer = (state = { articleList: [] }, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case GETARTICLE:
      myState.articleList = action.info;
      return myState;
    default:
      return state;
  }
};
export default reducer;
