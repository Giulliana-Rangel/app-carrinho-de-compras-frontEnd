export async function getCategories() {
  // Implemente aqui
  const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(urlCategories);
  const response = await request.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
