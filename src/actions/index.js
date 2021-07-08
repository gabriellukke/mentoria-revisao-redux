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

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailed = (payload) => ({
  type: GET_PRODUCTS_FAILED,
  payload,
});

export const getProductsThunk = (text) => async (dispatch) => {
  dispatch(getProducts());
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${text}`);
    const { results } = await response.json();
    dispatch(getProductsSuccess(results));
  } catch (error) {
    dispatch(getProductsFailed(error));
  }
};
