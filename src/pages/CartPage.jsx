import React, { Component } from 'react';

import ProductCard from '../components/ProductCard';

import '../css/MainPage.css';

export default class MainPage extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    );
  }
}
