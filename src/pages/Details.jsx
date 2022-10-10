import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Details extends Component {
  state = {
    nome: '',
    preco: '',
    imagem: '',
  };

  componentDidMount() {
    this.showProduct();
  }

  showProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    const data = await response;
    console.log(data);
    const { title, price,
      thumbnail } = response;
    this.setState({
      nome: title,
      preco: price,
      imagem: thumbnail,
    });
  };

  render() {
    const { nome, preco, imagem } = this.state;

    return (
      <>
        <header className="header">
          <Link data-testid="shopping-cart-button" to="/cart">
            <button
              type="button"
            >
              Carrinho
            </button>
          </Link>
        </header>

        <section>
          <h2 data-testid="product-detail-name">{nome}</h2>
          <img src={ imagem } alt={ nome } data-testid="product-detail-image" />
          <p data-testid="product-detail-price">
            <span>R$</span>
            {preco}
          </p>

        </section>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
