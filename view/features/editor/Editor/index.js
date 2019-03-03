
import React from 'react';
import { connect } from 'react-redux';
import reduxConfig from './store.js';
import { articleUrl } from '../../interface.js';
import { obj2Arr } from '../../common/tool.js';
import EditorApp from './app.js';
import { daoServerOfParamsObjOfPost } from '../../common/daoServe';
import { saveResultAction } from './actions';

let dispatchCopy = null;
let myState = null;

const mapStateToProp = (state = {}, ownProps = {}) => {
  myState = state[reduxConfig.stateKey];
  return {
    dataObj: myState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatchCopy = dispatch;
  return {
    saveArticle: (obj) => {
      saveArticle(obj);
    },
  };
};
const Editor = connect(
  mapStateToProp,
  mapDispatchToProps,
)(EditorApp);
export default Editor;

const saveArticle = (obj) => {
  // let queryObj = obj2Arr(requeryPrams) || [];
  // const requestParams = queryObj.join('&') + '';

  const url = articleUrl;
  daoServerOfParamsObjOfPost({
    url,
    dispatch: dispatchCopy,
    action: saveResultAction,
    route: '',
    queryCallback,
    data: obj,
  });
};
const queryCallback = (e) => {
  console.log('equeryCallback',e);
}
