import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { BsCartXFill } from 'react-icons/bs';
import { removeAll, addCart, subtract } from '../services/addCart';
import '../styles/CartProductCard.css';

export default class CartProductCard extends Component {
  render() {
    const { product, amount, cartUpdate, isDisabled, headerFunc } = this.props;
    const { price, title, thumbnail } = product;
    return (
      <div className="product-card-container">
        <div className="title-and-image">
          <h3
            className="cart-title"
            data-testid="shopping-cart-product-name"
          >
            { title }
          </h3>
          <img className="=cart-image" src={ thumbnail } alt={ title } />
        </div>
        <BsCartXFill
          className="erase-product"
          type="button"
          onClick={ () => {
            removeAll(product);
            cartUpdate();
            headerFunc();
          } }
        />
        <div className="amount-btns">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => {
              subtract(product);
              cartUpdate();
              headerFunc();
            } }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${amount}`}</p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            disabled={ isDisabled }
            onClick={ () => {
              addCart(product);
              cartUpdate();
              headerFunc();
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
  isDisabled: PropTypes.bool.isRequired,
  headerFunc: PropTypes.func.isRequired,
  product: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
