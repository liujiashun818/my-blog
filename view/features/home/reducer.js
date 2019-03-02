
import homePageReducer from './HomePage/store';
import singIn from './../signIn/SignIn/store';
import editor from './../editor/Editor/store';

const homeReducers = [];
homeReducers.push(homePageReducer,singIn,editor);
export default homeReducers;