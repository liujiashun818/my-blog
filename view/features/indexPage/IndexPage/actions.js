import { GETARTICLE, DELETEARTICLE } from './actionTypes';

export const getArticleAction = value => ({
  type: GETARTICLE,
  info: value,
});
export const deleteArticleAction = value =>({
  type: DELETEARTICLE,
  info: value,
});

export default { getArticleAction, deleteArticleAction };
