import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Loading from '../components/Loading'

class MainPage extends Component {
  state = {
    loading: false,
    loaded: false,
    search: '',
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // getProductsFromCategoryAndQuery(categoryId, query)
  }

  render() {
    const {loading, loaded, search} = this.state;
    return (
      <div>
        <Header />
        <input data-testid="query-input" name="search" type="text" value={ search } onChange={ this.handleInputChange } />
        <button data-testid="query-button">Pesquisar</button>
        <div>
          { loading && <Loading />
            // aqui entra o map pra renderizar o card de produtos 
          }
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
