
import homePageReducer from './HomePage/store';
import singIn from './../signIn/SignIn/store';
import editor from './../editor/Editor/store';
import indexPage from './../indexPage/IndexPage/store';
import detail from './../detail/Detail/store';

const homeReducers = [];
homeReducers.push(homePageReducer, singIn, editor, indexPage, detail);
export default homeReducers;
