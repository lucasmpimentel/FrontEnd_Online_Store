import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { BsCartXFill, BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
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
        </div>
        <div className="image-container">
          <img className="=cart-image" src={ thumbnail } alt={ title } />
        </div>
        <div className="amount-btns">
          <BsCartXFill
            className="erase-product"
            type="button"
            onClick={ () => {
              removeAll(product);
              cartUpdate();
              headerFunc();
            } }
          />
          <BsCartDashFill
            className="less-products"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => {
              subtract(product);
              cartUpdate();
              headerFunc();
            } }
          />
          <div className="amount-container">
            <span data-testid="shopping-cart-product-quantity">{ amount }</span>
          </div>
          <BsCartPlusFill
            className="more-products"
            data-testid="product-increase-quantity"
            type="button"
            disabled={ isDisabled }
            onClick={ () => {
              addCart(product);
              cartUpdate();
              headerFunc();
            } }
          />
        </div>
        <div className="price-container">
          <h3>{`R$ ${price}`}</h3>
        </div>
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
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ])).isRequired,
};
