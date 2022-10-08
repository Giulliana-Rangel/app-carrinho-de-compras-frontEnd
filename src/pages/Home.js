import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;
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
        <div>
          {categories.map((item) => (
            <button
              data-testid="category"
              type="button"
              key={ item.id }
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Home;
