import React, { Component } from 'react';
import { func, bool, string } from 'prop-types';
import CardProducts from '../components/CardProducts';
import CategoriesList from '../components/CategoriesList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/MainPage.css';

export default class MainPage extends Component {
  state = {
    loading: false,
    loaded: false,
    listCategories: [],
    listProducts: [],
    waiting: true,
    categoryId: '',
    headerFunc: '',
  }

  async componentDidMount() {
    const { click } = this.props;
    if (click) this.searchClick();
    const list = await getCategories();
    this.setState({ listCategories: list });
  }

  getHeaderState = (funct) => {
    this.setState({ headerFunc: funct });
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (idCategory) => {
    this.setState({ categoryId: idCategory, loading: true, waiting: false }, async () => {
      const getProducts = await getProductsFromCategoryAndQuery(idCategory, '');
      this.setState({ listProducts: getProducts, loading: false, loaded: true,
      });
    });
  }

  searchClick = () => {
    console.log('aqui');
    const { value, endSearch } = this.props;
    const { categoryId } = this.state;
    this.setState({ loading: true, waiting: false }, async () => {
      const getProducts = await getProductsFromCategoryAndQuery(categoryId, value);
      this.setState({ listProducts: getProducts, loading: false, loaded: true,
      });
      endSearch();
    });
  }

  render() {
    const { loading, loaded, waiting, listCategories, listProducts, headerFunc,
    } = this.state;
    return (
      <div>
        <Header
          getHeaderState={ this.getHeaderState }
          { ...this.props }
          onClick={ this.searchClick }
        />
        <div className="categories-products">
          <section className="categories-container">
            { listCategories.map((item) => (
              <CategoriesList
                handleClick={ this.handleClick }
                key={ item.id }
                idCategory={ item.id }
                categorieName={ item.name }
              />))}
          </section>
          <section className="products-container">
            { loading && <Loading /> }
            { loaded && listProducts.results.map((product) => (
              <CardProducts
                key={ product.id }
                product={ product }
                headerFunc={ headerFunc }
              />))}
            { waiting && (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>) }
          </section>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  click: bool.isRequired,
  value: string.isRequired,
  endSearch: func.isRequired,
};
