import { DETAILACTION, PUTRESULTACTION,SAVERESULTACTION } from './actionTypes';

export const detailAction = value => ({
  type: DETAILACTION,
  info: value,
});

export const putResultAction = value => ({
  type: PUTRESULTACTION,
  info: value,
});
export const saveResultAction = value => ({
  type: SAVERESULTACTION,
  info: value,
});
export default { detailAction, putResultAction, SAVERESULTACTION };
