import React, { Component } from 'react';

import ProductCard from '../components/ProductCard';

import '../css/MainPage.css';
import LoadingPage from './LoadingPage';

export default class MainPage extends Component {
  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <LoadingPage />;
    }

    return (
      <div className="product-list">
        {products.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    );
  }
}
