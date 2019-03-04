import { DETAILACTION } from './actionTypes';

export const detailAction = value => ({
  type: DETAILACTION,
  info: value,
});
export default { detailAction };
