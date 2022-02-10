import PropTypes, { oneOfType } from 'prop-types';
<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
=======
import '../styles/CardProducts.css';
>>>>>>> 6eb391bc2d5b84696b7405d068d0f4affe4234ec

export default class CardProducts extends Component {
  render() {
    const {
      product: { title, price, thumbnail, id },
    } = this.props;
    return (
<<<<<<< HEAD
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
=======
      <div data-testid="product" className="card-product-container">
        <h4 className="title-card-product">{ title }</h4>
        <img className="img-card-product" src={ thumbnail } alt={ title } />
        <p>
          {`R$ ${price}`}
        </p>
      </div>
>>>>>>> 6eb391bc2d5b84696b7405d068d0f4affe4234ec
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number]))
    .isRequired,
};
