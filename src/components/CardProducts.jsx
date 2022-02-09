import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

export default class CardProducts extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    console.log(this.props);
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
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
