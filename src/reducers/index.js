import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({ userReducer, productsReducer });

export default rootReducer;
