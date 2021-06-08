import { combineReducers } from 'redux';
import product from './productReducer';
import userReducer from './userReducer';

export default combineReducers({ product, userReducer });

// store = {
//   productReducer: {
//     products: [],
//     cartProducts: [],
//   },
//   userReducer: '',
// }
