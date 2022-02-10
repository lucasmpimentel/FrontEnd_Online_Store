import React, { Component } from 'react';
import CartProductCard from '../components/CartProductCard';
import { getCart } from '../services/addCart';

class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = getCart();
    if (cart) this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        {cart.length === 0 && (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        {cart.length !== 0
          && Object.values(
            cart.reduce((acc, product) => {
              const includesId = Object.keys(acc).some(
                (id) => id === product.id,
              );
              if (includesId) acc[product.id] = [product, acc[product.id][1] + 1];
              else acc[product.id] = [product, 1];
              return acc;
            }, {}),
          ).map(([product, amount]) => (
            <CartProductCard
              key={ product.id }
              product={ product }
              amount={ amount }
            />
          ))}
      </div>
    );
  }
}

export default Cart;
