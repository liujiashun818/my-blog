import { GETARTICLE } from './actionTypes';

export const getArticleAction = value => ({
  type: GETARTICLE,
  info: value,
});
export default { getArticleAction };
