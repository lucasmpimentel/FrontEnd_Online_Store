import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutForm extends Component {
  render() {
    return (
      <form>
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-fullname"
        />
        <input
          style={ { display: 'block' } }
          type="email"
          data-testid="checkout-email"
        />
        <input
          type="text"
          maxLength="11"
          data-testid="checkout-cpf"
          placeholder="Insira somente números"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-phone"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-cep"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-adress"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-fullname"
        />
        <Link to="/">
          <button type="button">Finalizar compra</button>
        </Link>
      </form>
    );
  }
}
