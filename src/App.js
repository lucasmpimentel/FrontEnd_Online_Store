import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ MainPage } />
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/productDetail/:id" component={ ProductDetails } />
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;
