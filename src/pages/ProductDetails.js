import React, { Component } from 'react';
import Header from '../components/Header';
import { addAvaliation, addCart, getAvaliation } from '../services/addCart';
import { getCategories } from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.pastAvaliations = null;
    this.stars = [false, false, false, false, false];
    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
      headerFunc: '',
    };

    this.retrieveItem = this.retrieveItem.bind(this);
  }

  async componentDidMount() {
    await getCategories();
    this.retrieveItem();
  }

  // Função responsavel por ver se o objeto apresentado possui avaliações prévias ao entrar na página
  testingItens = () => {
    const { title } = this.state;
    const result = getAvaliation();
    let aux;
    if (result) {
      aux = result.filter((item) => item.nome === title);
    }
    if (aux && aux.length > 0) {
      this.pastAvaliations = aux;
    }
    this.forceUpdate();
  }

  retrieveItem = () => {
    const { title, thumbnail, price } = JSON.parse(localStorage.getItem('product'));
    this.setState({
      title,
      thumbnail,
      price,
    }, this.testingItens);
  };

  // Função responsavel por marcar e desmarcar os radio inputs
  radioClicked = ({ target }) => {
    const { name } = target;
    const nameToNumber = name.replace(/[^0-9]/g, '');
    this.stars = this.stars.map((__item, index) => index < nameToNumber);
    this.forceUpdate();
  }

  // Funçao responsavel por capturar o que esta sendo escrito nos inputs e colocar dentro do objeto de avaliação
  onChangeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  buttonCick = () => {
    const { title, email: value, mensagem: description } = this.state;
    if (this.stars.includes(true) && value.length > 0) {
      const starsLength = this.stars.filter((item) => item === true);
      addAvaliation(
        { nome: title, starsNumber: starsLength, email: value, mensagem: description },
      );
    }
    this.testingItens();
  }

  getHeaderState = (func) => {
    this.setState({ headerFunc: func });
  }

  render() {
    const { title, thumbnail, price, email, headerFunc } = this.state;
    const itemDetail = JSON.parse(localStorage.getItem('product'));
    return (
      <>
        <div>
          <Header getHeaderState={ this.getHeaderState } />
          <h3>Detalhes de produto</h3>
          <h4 data-testid="product-detail-name">{title}</h4>
          <img src={ thumbnail } alt={ title } />
          <p>
            {`R$ ${price}`}
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              addCart(itemDetail);
              headerFunc();
            } }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <section id="newAvaliation">
          <form>
            <input
              data-testid="product-detail-email"
              type="text"
              name="email"
              placeholder="email"
              onChange={ this.onChangeHandler }
              value={ email }
            />
            {this.stars.map((item, index) => (
              <input
                onClick={ this.radioClicked }
                key={ `actual_${index}` }
                type="radio"
                name={ index + 1 }
                data-testid={ `${index + 1}-rating` }
                checked={ item }
              />))}
            <textarea
              data-testid="product-detail-evaluation"
              type="text"
              name="mensagem"
              placeholder="Mensagem (opcional)"
              onChange={ this.onChangeHandler }
              style={ { height: '100px', width: '300px' } }
            />
            <button
              onClick={ this.buttonCick }
              data-testid="submit-review-btn"
              type="button"
            >
              Avaliar
            </button>
          </form>
        </section>
        <section id="updatedAvaliations">
          {this.pastAvaliations !== null
            ? this.pastAvaliations.map((item1, index1) => (
              <>
                <hr />
                <p>{item1.email}</p>
                <p>{item1.mensagem}</p>
                {this.stars.map((__item2, index2) => (
                  <input
                    key={ `old_${index1}${index2}` }
                    type="radio"
                    name={ `${index1}${index2}` }
                    checked={ (this.pastAvaliations[index1].starsNumber[index2]) }
                    disabled="true"
                  />
                ))}
                <hr />
              </>
            )) : null }
        </section>
      </>
    );
  }
}

export default ProductDetails;
