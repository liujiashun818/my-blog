
import React from 'react';
import { connect } from  'react-redux';
import { detailAction } from './actions.js';
import reduxConfig from './store.js';
import daoServer from '../../common/daoServe.js';
import { detailUrl } from '../../interface.js';
import app from './app.js';
import { obj2Arr } from '../../common/tool.js';

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
      getArticle(queryObj);
    }
  }
}
const Detail = connect(
  mapStateToProp,
  mapDispatchToProps
)(app)
export default Detail;

const getArticle = (requeryPrams) => {
  const url = detailUrl + ('/' + requeryPrams.id);
  daoServer(url, dispatchCopy, detailAction, '', queryCallback);
}
const queryCallback = () => {
  // alert('我是callback ')
}