import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

export default class CartProductCard extends Component {
  render() {
    const { product: { price, title, thumbnail }, amount } = this.props;
    return (
      <div>
        <button type="button">X</button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <div>
          <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${amount}`}</p>
        </div>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  amount: PropTypes.number.isRequired,
  product: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
