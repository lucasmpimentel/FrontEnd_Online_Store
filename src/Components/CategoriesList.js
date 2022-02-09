import React, { Component } from 'react';

class CategoriesList extends Component {
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

export default CategoriesList;
