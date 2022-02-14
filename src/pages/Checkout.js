import React, { Component } from 'react';
import ListProducts from '../components/ListProducts';
import Formulary from '../components/Formulary';
import HeaderCheckbox from '../components/HeaderCheckbox';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <HeaderCheckbox />
        <ListProducts />
        <Formulary />
      </div>
    );
  }
}
