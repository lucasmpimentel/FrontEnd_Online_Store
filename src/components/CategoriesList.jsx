import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CategoriesList.css';

export default class CategoriesList extends Component {
  click = () => {
    const { handleClick, idCategory } = this.props;
    handleClick(idCategory);
  }

  render() {
    const { categorieName } = this.props;
    return (
      <div className="categories-buttons-container">
        <button
          onClick={ this.click }
          type="button"
          data-testid="category"
          className="categorie-button"
        >
          {categorieName}
        </button>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categorieName: PropTypes.string.isRequired,
  idCategory: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
