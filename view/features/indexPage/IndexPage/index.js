
import React from 'react';
import { connect } from  'react-redux';
import { getArticleAction } from './actions.js';
import reduxConfig from './store.js';
import daoServer from '../../common/daoServe.js';
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
const queryCallback = () => {
  // alert('我是callback ')
}