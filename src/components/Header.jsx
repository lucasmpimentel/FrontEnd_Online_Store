import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { getCart } from '../services/addCart';
import '../styles/Header.css';

export default class Header extends Component {
  state={
    amount: 0,
  }

  componentDidMount() {
    const getAmount = getCart() === null ? 0 : getCart().length;
    this.setState({ amount: getAmount });
    const { getHeaderState } = this.props;
    getHeaderState(this.setAmount);
  }

  setAmount = () => {
    const getAmount = getCart() === null ? 0 : getCart().length;
    this.setState({ amount: getAmount });
  }

  render() {
    const LIMITE_DO_CARRINHO = 99;
    const { amount } = this.state;
    const { value, onChange, onClick } = this.props;
    return (
      <header className="header-container">
        <Link to="/" clasName="link-clear">
          <h1 className="title-store">Lojinha do seu Zé!</h1>
        </Link>
        <div>
          <input
            data-testid="query-input"
            name="search"
            type="text"
            value={ value }
            onChange={ onChange }
          />
          <Link to="/">
            <button
              data-testid="query-button"
              type="button"
              onClick={ onClick }
            >
              Pesquisar
            </button>
          </Link>
        </div>
        <Link clasName="link-clear" to="/cart" data-testid="shopping-cart-button">
          <div className="container-btn">
            <div
              className="cart-amount"
              data-testid="shopping-cart-size"
            >
              {amount <= LIMITE_DO_CARRINHO ? amount : '99+'}
            </div>
            <BsFillCartFill className="cart-icon" />
          </div>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  getHeaderState: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
