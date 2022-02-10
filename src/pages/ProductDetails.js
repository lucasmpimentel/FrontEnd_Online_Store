import React, { Component } from 'react';
import Header from '../components/Header';
import { addCart } from '../services/addCart';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
    };

    this.retrieveItem = this.retrieveItem.bind(this);
  }

  componentDidMount() {
    this.retrieveItem();
  }

  retrieveItem = () => {
    const { title, thumbnail, price } = JSON.parse(localStorage.getItem('product'));
    this.setState({
      title,
      thumbnail,
      price,
    });
  };

  render() {
    const { title, thumbnail, price } = this.state;
    const itemDetail = JSON.parse(localStorage.getItem('product'));
    return (
      <div>
        <Header />
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
          onClick={ () => addCart(itemDetail) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetails;
