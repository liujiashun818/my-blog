import { ARTICLESTATE } from './actionTypes';

export const saveResultAction = value => ({
  type: ARTICLESTATE,
  info: value,
});
export default { saveResultAction };
