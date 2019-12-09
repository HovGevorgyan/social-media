import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';
import * as actions from '../redux/actions';

const store = createStore(combineReducers(reducers));

export default store;

export {actions};
