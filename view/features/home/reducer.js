
import homePageReducer from './HomePage/store';
import singIn from './../signIn/SignIn/store';
import editor from './../editor/Editor/store';
import indexPage from './../indexPage/IndexPage/store';

const homeReducers = [];
homeReducers.push(homePageReducer, singIn, editor, indexPage);
export default homeReducers;
