import { ADD_TO_CART, FINISH_LOADING, REMOVE_FROM_CART, START_LOADING } from '../actions';

const initialState = {
  products: [],
  cartProducts: [],
  loading: false,
};

function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_LOADING:
      return { ...state, loading: true };

    case FINISH_LOADING:
      return {
        ...state,
        products: payload.result,
        loading: false,
      };

    case ADD_TO_CART:
      const product = state.products.find((prod) => prod.id === payload.id);
      return {
        ...state,
        cartProducts: [...state.cartProducts, product],
      };

    case REMOVE_FROM_CART:
      const cartProducts = state.cartProducts.filter((prod) => prod.id !== payload.id);
      return {
        ...state,
        cartProducts,
      };

    default:
      return state;
  }
}

export default productReducer;
