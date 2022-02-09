import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends Component {
  render() {
    const { categorieName } = this.props;
    return (
      <div>
        <button type="button" data-testid="category">{categorieName}</button>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categorieName: PropTypes.string.isRequired,
};
