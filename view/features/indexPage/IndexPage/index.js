
import React from 'react';
import { connect } from  'react-redux';
import { getArticleAction } from './actions.js';
import reduxConfig from './store.js';
import {daoServer, daoServerOfParamsObjOfDelete} from '../../common/daoServe.js';
import { obj2Arr } from '../../common/tool.js';
import app from './app.js';
import { articleUrl } from '../../interface.js';
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
    getArticleArray: () => {
      getArticleArray()
    },
    deleteArticle: (id) => {
      deleteArticle(id);
    }
  }
}
const IndexPage = connect(
  mapStateToProp,
  mapDispatchToProps
)(app)
export default IndexPage;

const getArticleArray = (requeryPrams) => {
  // let queryObj = obj2Arr(requeryPrams) || [];
  // const requestParams = queryObj.join('&') + '';
  const url = articleUrl;
  daoServer(url, dispatchCopy, getArticleAction, '', queryCallback)
}

const deleteArticle = (id) => {
  const url = articleUrl + `/${id}`;
  alert('kkk');
  // todo
  daoServerOfParamsObjOfDelete(url, dispatchCopy, getArticleAction, '', queryCallback)
}

const queryCallback = () => {
  // alert('我是callback ')
}