
import React from 'react';
import { connect } from  'react-redux';
import { getArticleAction, deleteArticleAction } from './actions.js';
import reduxConfig from './store.js';
import {daoServer, daoServerOfParamsObjOfDelete} from '../../common/daoServe.js';
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
  const url = articleUrl;
  daoServer(url, dispatchCopy, getArticleAction, '', queryCallback)
}

const deleteArticle = (id) => {
  const url = articleUrl + `/${id}`;
  daoServerOfParamsObjOfDelete({
    url,
    dispatch: dispatchCopy,
    action: deleteArticleAction,
    route: '',
    queryCallback:queryCallback,
  })
  function queryCallback() {
    alert('llll')
  }
}

const queryCallback = (e,b,v) => {
  // console.log('e',e);
  console.log('b',b);
  console.log('v',v);

}