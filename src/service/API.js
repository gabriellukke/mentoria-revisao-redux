const BASE_URL = 'https://api.mercadolibre.com';

const fetchURL = async (endpoint) => {
  const result = await fetch(`${BASE_URL}${endpoint}`);
  return result.json();
};

export const getProductById = (id) => fetchURL(`/items/${id}`);

export const searchProductByText = (text) => fetchURL(`/sites/MLB/search?q=${text}`);
