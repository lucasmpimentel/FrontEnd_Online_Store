export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
}