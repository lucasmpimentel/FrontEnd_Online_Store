import React, { Component } from 'react';
import { getCart } from '../services/addCart';

export default class ListProducts extends Component {
  state = {
    shoppingArray: [],
  }

  componentDidMount() {
    const shoppingArray = getCart();
    if (shoppingArray) this.setState({ shoppingArray });
  }

  renderLi = (array) => (array.map(({ title, price, id }) => (
    <li key={ id }>
      <span>{`Nome do produto : ${title}`}</span>
      <span>{`Preço: ${price}`}</span>
    </li>
  )))

  totalPrice = (array) => array.reduce((acc, { price }) => acc + price, 0)

  render() {
    const { shoppingArray } = this.state;
    return (
      <div>
        <ul>
          {this.renderLi(shoppingArray)}
        </ul>
        <h3>{`O preço total é : ${this.totalPrice(shoppingArray)}`}</h3>
      </div>
    );
  }
}
