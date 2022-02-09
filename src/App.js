import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ MainPage } />
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;