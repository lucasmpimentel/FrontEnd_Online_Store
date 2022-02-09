import PropTypes, { oneOfType } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardProducts extends Component {
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
          // state: { ${title }, ${price }, ${thumbnail }},
        } }
      >
        <div data-testid="product" className="card-product-container">
          <h1>{title}</h1>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            {price}
          </p>
        </div>
      </Link>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};
