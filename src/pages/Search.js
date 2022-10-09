import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = async () => {
    const { query } = this.state;

    const response = await getProductsFromCategoryAndQuery(query);
    const { results } = response;
    this.setState({
      products: results,
    });
  };

  render() {
    const { query, products } = this.state;
    return (
      <>
        <label htmlFor="query">
          <input
            type="text"
            data-testid="query-input"
            name="query"
            id="query"
            value={ query }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Buscar
          </button>
        </label>

        { !products.length > 1 ? <p>Nenhum Produto foi encontrado</p>
          : (
            products.map((product) => (
              <div
                key={ product.id }
                data-testid="product"
              >
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.title }</p>
                <p>{ `Valor R$: ${product.price}`}</p>
              </div>
            )))}
      </>
    );
  }
}
export default Search;
