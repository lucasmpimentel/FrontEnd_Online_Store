import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ MainPage } />
        <Route path="/cart" component={ Cart } />
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;
