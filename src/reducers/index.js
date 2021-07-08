import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productsReducer from './productsReducer';

const reducer = combineReducers({ userReducer, productsReducer });

export default reducer;
