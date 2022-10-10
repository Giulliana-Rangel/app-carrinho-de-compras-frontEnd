import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      products: [],
      showList: false,
    };
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

  render() {
    const { query, products, showList } = this.state;
    const productList = products.length === 0 ? <p>Nenhum produto foi encontrado</p>
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
        ))
      );
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
        { showList && productList }
      </>
    );
  }
}
export default Search;
