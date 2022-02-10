import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { removeAll, addCart, subtract } from '../services/addCart';

export default class CartProductCard extends Component {
  render() {
    const { product, amount, cartUpdate } = this.props;
    const { price, title, thumbnail } = product;
    return (
      <div>
        <button
          type="button"
          onClick={ () => {
            removeAll(product);
            cartUpdate();
          } }
        >
          X

        </button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <div className="amount-btns">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => {
              subtract(product);
              cartUpdate();
            } }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${amount}`}</p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => {
              addCart(product);
              cartUpdate();
            } }
          >
            +
          </button>
        </div>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  cartUpdate: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  product: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
