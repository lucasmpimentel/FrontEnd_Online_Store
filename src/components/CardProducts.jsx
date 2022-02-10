import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import '../styles/CardProducts.css';
import { addCart } from '../services/addCart';

export default class CardProducts extends Component {
  render() {
    const { product } = this.props;
    const { product: { title, price, thumbnail } } = this.props;
    console.log(this.props);
    return (
      <div data-testid="product" className="card-product-container">
        <h4 className="title-card-product">{ title }</h4>
        <img className="img-card-product" src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
