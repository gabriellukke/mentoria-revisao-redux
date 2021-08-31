import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingPage from './LoadingPage';
import ProductCard from '../components/ProductCard';

import '../css/MainPage.css';

class MainPage extends Component {
  render() {
    const { products, loading, addToCart } = this.props;

    if (loading) {
      return <LoadingPage />;
    }

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onClick={addToCart}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  loading: state.productsReducer.loading,
});

export default connect(mapStateToProps)(MainPage);
