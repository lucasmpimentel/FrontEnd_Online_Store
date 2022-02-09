import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
        <input type="text" />
        <div>
          {/* <span>Produtos aqui</span> */}
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
