import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from '../actions';

const INITIAL_STATE = {
  products: [],
  cartProducts: [],
  loading: false,
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case GET_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default productsReducer;
