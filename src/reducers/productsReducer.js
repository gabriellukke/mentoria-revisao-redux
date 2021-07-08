import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from '../actions';

const INITIAL_STATE = {
  products: [],
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: [...state.products, ...action.payload] };
    case GET_PRODUCTS_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default productsReducer;
