const BASE_URL = 'https://api.mercadolibre.com';

const fetchURL = async (endpoint) => {
  const result = await fetch(`${BASE_URL}${endpoint}`);
  return result.json();
};

const searchProductByText = (text) => fetchURL(`/sites/MLB/search?q=${text}`);

export default searchProductByText;
