import React, { Component } from 'react';
import { getCart } from '../services/addCart';
import CartProductCard from '../components/CartProductCard';

class Cart extends Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    const cart = getCart();
    if (cart) this.setState({ cart });
  }

  cartUpdate = () => this.setState({ cart: getCart() });

  render() {
    const { cart } = this.state;
    return (
      <div>
        {cart.length === 0
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {cart.length !== 0
        && Object.values(cart.reduce((acc, product) => {
          const includesId = Object.keys(acc).some((id) => id === product.id);
          if (includesId) acc[product.id] = [product, (acc[product.id][1] + 1)];
          else acc[product.id] = [product, 1];
          return acc;
        }, {})).map(([product, amount]) => {
          let quantity = amount;
          if (product.available_quantity < amount) quantity = product.available_quantity;
          return (
            <CartProductCard
              cartUpdate={ this.cartUpdate }
              key={ product.id }
              product={ product }
              amount={ quantity }
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
