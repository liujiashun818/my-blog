
import React from 'react';
import { connect } from  'react-redux';
import { siginAction, regirstAction } from './actions.js';
import reduxConfig from './store.js';
import {daoServerOfParamsObjOfPost, daoServer} from '../../common/daoServe.js';
import { regirstUrl, signInUrl, queryArticlesUrl} from '../../interface.js';
import { obj2Arr } from '../../common/tool.js';
import app from './app.js';

let dispatchCopy = null;
let myState = null;

const mapStateToProp = (state = {}, ownProps = {}) => {

  myState = state[reduxConfig.stateKey];
  return {
      dataObj: myState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatchCopy = dispatch;
  return {
    userSigin: (useInfo) => {
      daoServerOfParamsObjOfPost({url:signInUrl, dispatch:dispatchCopy, action:siginAction,route:'',queryCallback, data:useInfo})
    },
    userRegirst: (useInfo) => {
      daoServerOfParamsObjOfPost({url:regirstUrl, dispatch:dispatchCopy, action:siginAction,route:'',queryCallback, data:useInfo})
    }
  }
}
const SignIn = connect(
  mapStateToProp,
  mapDispatchToProps
)(app)
export default SignIn;
const queryCallback = () => {
  alert('我是callback ')
}