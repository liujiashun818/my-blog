import { DETAILACTION, PUTRESULTACTION } from './actionTypes';

export const detailAction = value => ({
  type: DETAILACTION,
  info: value,
});

export const putResultAction = value => ({
  type: PUTRESULTACTION,
  info: value,
});

export default { detailAction, putResultAction };
