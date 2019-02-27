import { REGIRSTACTION, SIGINACTION } from './actionTypes.js';

const reducer = (state = { regirstRes: '', signInInfo: '' }, action = {}) => {
  console.log('action', action);
  const myState = { ...state };
  switch (action.type) {
    case REGIRSTACTION:
      myState.regirstRes = action.info;
      return myState;
    case SIGINACTION:
      const userObj = action.info;
      if (userObj) {
        sessionStorage.setItem('user_id', userObj._id);
      }
      myState.signInInfo = action.info;
      return myState;
    default:
      return state;
  }
};
export default reducer;
