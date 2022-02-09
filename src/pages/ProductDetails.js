import PropTypes, { oneOfType } from 'prop-types';
import React, { Component } from 'react';

class ProductDetails extends Component {
  render() {
    const {
      match: {
        params: { title, thumbnail, price },
      },
    } = this.props;
    // Retornando undefined
    console.log('ProductDetails - props:', title, thumbnail, price);
    return (
      <div>
        <h3>Detalhes de produto</h3>
        <h4>{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number]))
      .isRequired,
  }).isRequired,
};

export default ProductDetails;
