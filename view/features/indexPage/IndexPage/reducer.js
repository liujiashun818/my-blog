import { GETARTICLE, DELETEARTICLE } from './actionTypes';

const reducer = (state = { articleList: [],deleteArticle: '' }, action = {}) => {
  const myState = { ...state };
  switch (action.type) {
    case GETARTICLE:
      myState.articleList = action.info;
      return myState;
    case DELETEARTICLE:
      console.log('action?????????', action);
      myState.deleteArticle = action.info;
    default:
      return state;
  }
};
export default reducer;
