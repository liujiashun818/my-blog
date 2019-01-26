import {REGIRSTACTION,SIGINACTION} from './actionTypes.js';
const reducer = (state = {'regirstRes': '', signInInfo: ''}, action = {}) => {
  console.log('action',action);
  const myState = {...state};
  switch (action.type)  {
    case REGIRSTACTION:
      myState.regirstRes = action.info;
    return myState;
    case SIGINACTION:
    myState.signInInfo = action.info;
  return myState;
     default:
    return state;
  }
}
export default reducer;