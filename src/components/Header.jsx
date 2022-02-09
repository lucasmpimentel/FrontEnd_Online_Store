import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}
