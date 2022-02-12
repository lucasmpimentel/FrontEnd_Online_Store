import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './styles/App.css';

class App extends Component {
  state={
    value: '',
    click: false,
  }

  endSearch = () => this.setState({ click: false, value: '' });

  onClick = () => this.setState({ click: true });

  onChange = ({ target: { value } }) => this.setState({ value });

  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => (<MainPage
              { ...this.state }
              onChange={ this.onChange }
              onClick={ this.onClick }
              endSearch={ this.endSearch }
            />) }
          />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route
            path="/productDetail/:id"
            render={ () => (<ProductDetails
              { ...this.state }
              onChange={ this.onChange }
              onClick={ this.onClick }
              endSearch={ this.endSearch }
            />) }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
