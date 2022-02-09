import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CategoriesList from '../Components/CategoriesList';

class MainPage extends Component {
  state = {
    listCategories: [],
  }

  async componentDidMount() {
    const list = await getCategories();
    this.setState({ listCategories: list });
  }

  render() {
    const { listCategories } = this.state;
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
        <section>
          {
            listCategories.map((item) => (
              <CategoriesList
                key={ item.id }
                categorieName={ item.name }
              />))
          }
          ;
        </section>
      </div>
    );
  }
}

MainPage.propTypes = {};

export default MainPage;
