import PropTypes, { oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardProducts.css';

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
    const {
      product: { title, price, thumbnail, id },
    } = this.props;
    return (
      // Tentando passar o resultado de pesquisa que gerou o Card para a próxima página (ProducDetails)
      // https://stackoverflow.com/questions/45598854/passing-values-through-react-router-v4-link
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/productDetail/${id}`,
        } }
        onClick={ this.saveToLocalStorage }
      >
        <div
          data-testid="product"
          className="card-product-container"
          props={ (title, price, thumbnail, id) }
        >
          <h4 className="title-card-product">{title}</h4>
          <img className="img-card-product" src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </div>
      </Link>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};
