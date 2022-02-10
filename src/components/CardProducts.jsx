import PropTypes, { oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../services/addCart';
import '../styles/CardProducts.css';

export default class CardProducts extends Component {
  constructor() {
    super();

    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  // Auxilia a montagem da página de detalhe do item
  saveToLocalStorage = () => {
    console.log('clique: CardProducts => saveToLocalStorage');
    const {
      product,
    } = this.props;
    localStorage.setItem(
      'product',
      JSON.stringify(product),
    );
  };

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div
        data-testid="product"
        className="card-product-container"
        props={ (title, price, thumbnail, id) }
      >
        <Link
          data-testid="product-detail-link"
          to={ `/productDetail/${id}` }
          onClick={ this.saveToLocalStorage }
        >
          <h4 className="title-card-product">{title}</h4>
          <img className="img-card-product" src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <hr />
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};
