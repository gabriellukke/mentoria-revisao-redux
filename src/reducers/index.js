import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({ userReducer, productReducer });

export default rootReducer;
