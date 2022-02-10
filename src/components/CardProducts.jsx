import PropTypes, { oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardProducts.css';
import { addCart } from '../services/addCart';

export default class CardProducts extends Component {
  constructor() {
    super();

    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  saveToLocalStorage = () => {
    const {
      product: { title, price, thumbnail, id },
    } = this.props;
    localStorage.setItem('product', JSON.stringify({ title, price, thumbnail, id }));
  };

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      // Tentando passar o resultado de pesquisa que gerou o Card para a próxima página (ProducDetails)
      // https://stackoverflow.com/questions/45598854/passing-values-through-react-router-v4-link
      <div
        data-testid="product"
        className="card-product-container"
        props={ (title, price, thumbnail, id) }
      >
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/productDetail/${id}`,
          } }
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
