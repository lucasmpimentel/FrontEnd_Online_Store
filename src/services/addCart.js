export const addCart = (product) => {
  const prev = JSON.parse(localStorage.getItem('cartItems'));
  if (prev) {
    const { length } = prev.filter(({ id }) => id === product.id);
    if (product.available_quantity <= length) {
      return localStorage.setItem('cartItems', JSON.stringify(prev));
    }
    return localStorage.setItem('cartItems', JSON.stringify([...prev, product]));
  }
  localStorage.setItem('cartItems', JSON.stringify([product]));
};
// available_quantity
export const getCart = () => JSON.parse(localStorage.getItem('cartItems'));

export const removeAll = ({ id }) => {
  const storage = JSON.parse(localStorage.getItem('cartItems'));
  const excluid = storage.filter(({ id: id2 }) => id !== id2);
  localStorage.setItem('cartItems', JSON.stringify(excluid));
};

export const subtract = ({ id }) => {
  const storage = JSON.parse(localStorage.getItem('cartItems'));
  const indexRemove = storage.reduce((acc, { id: id2 }, index) => {
    if (id === id2) return index;
    return acc;
  }, 0);
  storage.splice(indexRemove, 1);
  localStorage.setItem('cartItems', JSON.stringify(storage));
};

export const addAvaliation = (avaliationObject) => {
  let prev = JSON.parse(localStorage.getItem('Avaliation'));
  if (prev) {
    prev = prev.filter((item) => (
      item.email !== avaliationObject.email || item.nome !== avaliationObject.nome));
  }
  if (prev) {
    return (
      localStorage.setItem('Avaliation', JSON.stringify([...prev, avaliationObject])));
  }
  localStorage.setItem('Avaliation', JSON.stringify([avaliationObject]));
};

export const getAvaliation = () => JSON.parse(localStorage.getItem('Avaliation'));
