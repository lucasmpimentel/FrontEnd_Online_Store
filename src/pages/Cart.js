import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard';
import { getCart } from '../services/addCart';
import Header from '../components/Header';

class Cart extends Component {
  state = {
    cart: [],
    headerFunc: '',
  };

  componentDidMount() {
    const cart = getCart();
    if (cart) this.setState({ cart });
  }

  getHeaderState = (func) => {
    this.setState({ headerFunc: func });
  }

  cartUpdate = () => this.setState({ cart: getCart() });

  render() {
    const { cart, headerFunc } = this.state;
    return (
      <div>
        <Header getHeaderState={ this.getHeaderState } { ...this.props } />
        {cart.length === 0 && (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        {cart.length !== 0
        && Object.values(cart.reduce((acc, product) => {
          const includesId = Object.keys(acc).some((id) => id === product.id);
          if (includesId) acc[product.id] = [product, (acc[product.id][1] + 1)];
          else acc[product.id] = [product, 1];
          return acc;
        }, {})).map(([product, amount]) => {
          let quantity = amount;
          let isDisable = false;
          if (product.available_quantity <= amount) {
            quantity = product.available_quantity;
            isDisable = true;
          }
          return (
            <CartProductCard
              cartUpdate={ this.cartUpdate }
              key={ product.id }
              product={ product }
              amount={ quantity }
              isDisable={ isDisable }
              headerFunc={ headerFunc }
            />
          );
        })}
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
