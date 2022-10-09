export async function getCategories() {
  const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(urlCategories);
  const response = await request.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query) {
    const urlQuerry = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
    const request = await fetch(urlQuerry);
    const response = await request.json();

    return response;
  }
  const urlCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const request = await fetch(urlCategoryId);
  const response = await request.json();

  return response;
}
export async function getProductById(productId) {
  const urlProductId = `https://api.mercadolibre.com/items/${productId}`;
  const request = await fetch(urlProductId);
  const response = await request.json();
  return response;
}
