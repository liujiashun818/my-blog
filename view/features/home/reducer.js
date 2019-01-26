
import homePageReducer from './HomePage/store.js';
import singIn from './../signIn/SignIn/store.js';
const homeReducers = [];
homeReducers.push(homePageReducer,singIn);
export default homeReducers;