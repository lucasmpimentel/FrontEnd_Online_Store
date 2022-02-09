import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Loading from '../components/Loading';
import CategoriesList from '../components/CategoriesList';
import CardProducts from '../components/CardProducts';
import '../styles/MainPage.css';

export default class MainPage extends Component {
  state = {
    loading: false,
    loaded: false,
    search: '',
    listCategories: [],
    listProducts: [],
  }

  async componentDidMount() {
    const list = await getCategories();
    this.setState({ listCategories: list });
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { search } = this.state;
    const categoryId = '';
    this.setState({ loading: true }, async () => {
      const getProducts = await getProductsFromCategoryAndQuery(categoryId, search);
      this.setState({ listProducts: getProducts, loading: false, loaded: true });
    });
  }

  render() {
    const { loading, loaded, search, listCategories, listProducts } = this.state;
    return (
      <div>
        <Header />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
        <input
          data-testid="query-input"
          name="search"
          type="text"
          value={ search }
          onChange={ this.handleInputChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <div className="categories-products">
          <section>
            { listCategories.map((item) => (
              <CategoriesList
                handleClick
                key={ item.id }
                categorieName={ item.name }
              />))}
          </section>
          <div>
            { loading && <Loading /> }
            { loaded && listProducts.results.map((product) => (
              <CardProducts key={ product.id } product={ product } />
            ))}
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
