import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import '../styles/CardProducts.css';

export default class CardProducts extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    console.log(this.props);
    return (
      <div data-testid="product" className="card-product-container">
        <h4 className="title-card-product">{ title }</h4>
        <img className="img-card-product" src={ thumbnail } alt={ title } />
        <p>
          {`R$ ${price}`}
        </p>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
