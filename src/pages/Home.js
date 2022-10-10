import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './Home.css';

class Home extends React.Component {
  state = {
    query: '',
    categories: [],
    products: [],
    showList: false,
  };

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = async () => {
    const { query } = this.state;
    const response = await getProductsFromCategoryAndQuery('', query);
    const { results } = response;
    console.log(query);
    this.setState({
      products: results,
      showList: true,
    });
  };

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { query, categories, products, showList } = this.state;
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
        <main className="main">
          <aside className="categories">
            {categories.map((item) => (
              <button
                data-testid="category"
                type="button"
                className="category-button"
                key={ item.id }
              >
                {item.name}
              </button>
            ))}
          </aside>
          <Search
            query={ query }
            products={ products }
            showList={ showList }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
        </main>
      </>
    );
  }
}

export default Home;
