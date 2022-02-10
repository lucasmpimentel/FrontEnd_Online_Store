import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
    };

    this.retrieveItem = this.retrieveItem.bind(this);
  }

  componentDidMount() {
    this.retrieveItem();
  }

  retrieveItem = () => {
    const item = JSON.parse(localStorage.getItem('product'));
    this.setState({
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
    });
  };

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <h3>Detalhes de produto</h3>
        <h4 data-testid="product-detail-name">{title}</h4>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
      </div>
    );
  }
}

export default ProductDetails;
