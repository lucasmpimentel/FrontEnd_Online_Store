import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends Component {
  click = () => {
    const { handleClick, idCategory } = this.props;
    console.log(idCategory);
    handleClick(idCategory);
  }

  render() {
    const { categorieName } = this.props;
    return (
      <div>
        <button
          onClick={ this.click }
          type="button"
          data-testid="category"
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
