import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Formulary extends Component {
  render() {
    return (
      <form>
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
        />
        <input
          style={ { display: 'block' } }
          type="email"
          data-testid="checkout-email"
          placeholder="email"
        />
        <input
          type="text"
          maxLength="11"
          data-testid="checkout-cpf"
          placeholder="CPF - somente números"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          maxLength="9"
          data-testid="checkout-phone"
          placeholder="Telefone - somente números"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-cep"
          placeholder="CEP - somente números"
        />
        <input
          style={ { display: 'block' } }
          type="text"
          data-testid="checkout-address"
          placeholder="Endereço - somente números"
        />
        <Link to="/">
          <button type="button">Finalizar compra</button>
        </Link>
      </form>
    );
  }
}

export default Formulary;
