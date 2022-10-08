import React from 'react';

class Cart extends React.Component {
  state = { carrinho: '' };

  render() {
    const { carrinho } = this.state;
    if (carrinho.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
  }
}

export default Cart;
