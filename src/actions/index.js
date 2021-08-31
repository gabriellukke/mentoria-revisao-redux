import searchProductByText from '../service/API';

export const SET_USERNAME = 'SET_USERNAME';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = (payload) => ({
  type: GET_PRODUCTS_ERROR,
  payload,
});

export const getProductsThunk = (payload) => async (dispatch) => {
  dispatch(getProducts());
  try {
    const { results } = await searchProductByText(payload);
    dispatch(getProductsSuccess(results));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};
