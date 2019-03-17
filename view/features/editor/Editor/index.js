
import React from 'react';
import { connect } from 'react-redux';
import reduxConfig from './store.js';
import EditorApp from './app.js';
import { daoServerOfParamsObjOfPost,daoServerOfParamsObjOfPut } from '../../common/daoServe';
import { saveResultAction, putResultAction } from './actions';
import {detailUrl,articleUrl} from "../../interface";
import daoServer from "../../common/daoServe";
import {detailAction} from "../../detail/Detail/actions";
// import {detailAction} from "../../detail/Detail/actions";

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
    editArticle: (obj) => {
      editArticle(obj);
    },
    getArticle: (id) => {
      getArticle(id);
    }
  };
};
const Editor = connect(
  mapStateToProp,
  mapDispatchToProps,
)(EditorApp);
export default Editor;

/**
 * @getArticle 获取编辑的内容；
 *
 */

const getArticle = (requeryPrams) => {
  const url = detailUrl + ('/' + requeryPrams.id);
  daoServer(url, dispatchCopy, detailAction, '', queryCallback);
}

const editArticle = (obj) => {
  const url = articleUrl + `/${obj.id}`;
  daoServerOfParamsObjOfPut({
    url,
    dispatch: dispatchCopy,
    action: putResultAction,
    route: '',
    queryCallback,
    data: obj,
  });
};

const saveArticle = (obj) => {
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
  // console.log('equeryCallback',e);
}
