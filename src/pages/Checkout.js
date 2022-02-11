import React, { Component } from 'react';
import ListProducts from '../components/ListProducts';
import Formulary from '../components/Formulary';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <ListProducts />
        <Formulary />
      </div>
    );
  }
}
