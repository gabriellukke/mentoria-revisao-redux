import {
  ADD_TO_CART, FINISH_LOADING, REMOVE_FROM_CART, START_LOADING,
} from '.';
import searchProductByText from '../../service/API';

const loadingAction = () => ({
  type: START_LOADING,
});

const resultAction = (result) => ({
  type: FINISH_LOADING,
  payload: { result },
});

export const getResult = (searchText) => async (dispatch) => {
  dispatch(loadingAction());
  const { results } = await searchProductByText(searchText);
  dispatch(resultAction(results));
};

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
