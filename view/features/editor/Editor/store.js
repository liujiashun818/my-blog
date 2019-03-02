import * as actions from './actions';
import * as constants from './constants';
import reducer from './reducer';
import * as actionType from './actionTypes';

const stateKey = 'editor';
export default {
  actions, constants, actionType, reducer, stateKey,
};
