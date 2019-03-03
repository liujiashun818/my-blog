
import React from 'react';
import { connect } from  'react-redux';
import { queryResult } from './actions.js';
import reduxConfig from './store.js';
import daoServer from '../../common/daoServe.js';
import { queryUrl } from '../../interface.js';
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
    getArticle: (queryObj) => {
      getArticle(queryObj)
    }
  }
}
const Detail = connect(
  mapStateToProp,
  mapDispatchToProps
)(app)
export default Detail;

const getArticle = (requeryPrams) => {
  // let queryObj = obj2Arr(requeryPrams) || [];
  // const requestParams = queryObj.join('&') + '';
  // todo 详情
  const url = queryUrl;
  daoServer(url, dispatchCopy, queryResult, '', queryCallback)
}
const queryCallback = () => {
  alert('我是callback ')
}