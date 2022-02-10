export const addCart = (product) => {
  console.log('clique');
  const prev = JSON.parse(localStorage.getItem('cartItems'));
  if (prev) return localStorage.setItem('cartItems', JSON.stringify([...prev, product]));
  localStorage.setItem('cartItems', JSON.stringify([product]));
};

export const getCart = () => JSON.parse(localStorage.getItem('cartItems'));
