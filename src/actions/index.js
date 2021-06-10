import searchProductByText from '../service/API';

export const SET_USERNAME = 'SET_USERNAME';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductFailed = (payload) => ({
  type: GET_PRODUCTS_FAILED,
  payload,
});

export const getProductsThunk = (text) => (dispatch) => {
  dispatch(getProducts());
  return searchProductByText(text)
    .then((products) => dispatch(getProductSuccess(products.results)))
    .catch((error) => dispatch(getProductFailed(error)));
};
