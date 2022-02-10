import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
      id: '',
    };

    this.retrieveItem = this.retrieveItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.retrieveItem();
  }

  // addToCard: {
  //   MLB1: { price, thumb, title, qtd, },
  //   MLB2: { price, thumb, title, qtd, },
  //  };

  addToCart = () => {
    if (!localStorage.getItem('addToCart')) {
      localStorage.setItem('addToCart', JSON.stringify([]));
    }

    // Objeto vazio
    const previousStorage = JSON.parse(localStorage.getItem('addToCart'));

    // Objeto
    const { title, thumbnail, price, id } = this.state;
    const newItem = { [id]: { title, thumbnail, price } };

    previousStorage.push(newItem);
    const newStorage = previousStorage;

    localStorage.setItem(
      'addToCart', JSON.stringify(newStorage),
    );
  };

  retrieveItem = () => {
    const item = JSON.parse(localStorage.getItem('product'));
    this.setState({
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      id: item.id,
    });
  };

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <h3>Detalhes de produto</h3>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetails;
