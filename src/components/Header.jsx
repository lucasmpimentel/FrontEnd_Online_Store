import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/addCart';

export default class Header extends Component {
  state={
    amount: 0,
  }

  componentDidMount() {
    const getAmount = getCart() === null ? 0 : getCart().length;
    this.setState({ amount: getAmount });
    this.cartUpdate();
    /* return (
      <span data-testid="shopping-cart-size">
      { amount }
      </span>
     ); */
  }

  cartUpdate = () => this.setState({ amount: getCart().length });

  render() {
    const { amount } = this.state;
    return (
      <div>
        <h1>Página Inicial</h1>
        <Link to="/cart" data-testid="shopping-cart-button">
          <div hidden>{ 'Carrinho de compras ' }</div>
          🛒
          {''}
          {amount}
        </Link>
      </div>
    );
  }
}
