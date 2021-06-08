import React, { Component } from 'react';

import ProductCard from '../components/ProductCard';

export default class CartPage extends Component {
  render() {
    const { products, onClick } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onClick={onClick}
            isCart
          />
        ))}
      </div>
    );
  }
}
