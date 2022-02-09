import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
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
