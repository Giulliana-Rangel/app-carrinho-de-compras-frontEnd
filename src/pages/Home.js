import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <input type="text" placeholder="Pesquisa" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link data-testid="shopping-cart-button" to="/cart">
          <button
            type="button"
          >
            Carrinho
          </button>
        </Link>
      </>
    );
  }
}

export default Home;
