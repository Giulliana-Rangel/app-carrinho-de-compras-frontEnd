import PropTypes from 'prop-types';
import React from 'react';
import './Search.css';

class Search extends React.Component {
  // state = {
  // };

  render() {
    const { query, products, showList, handleChange, handleClick } = this.props;
    const productList = products.length === 0 ? <p>Nenhum produto foi encontrado</p>
      : (
        products.map((product) => (
          <div
            className="list__item"
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
      <section className="search-container">
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label htmlFor="query">
          <input
            type="text"
            data-testid="query-input"
            name="query"
            id="query"
            value={ query }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            value=""
            onClick={ handleClick }
          >
            Buscar
          </button>
        </label>
        <section className="list-container">
          { showList && productList }
        </section>
      </section>
    );
  }
}

// Search.defaultProps = {
//   products: null,
// };

Search.propTypes = {
  query: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  showList: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Search;
