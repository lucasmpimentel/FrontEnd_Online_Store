import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <Route exact path="/" component={ MainPage } />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/productDetail/:id" component={ ProductDetails } />
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
