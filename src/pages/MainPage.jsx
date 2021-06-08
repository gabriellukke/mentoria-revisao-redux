import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingPage from './LoadingPage';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../redux/actions/productAction';

import '../css/MainPage.css';

class MainPage extends Component {
  render() {
    const { products, loading, onClick } = this.props;

    if (loading) {
      return <LoadingPage />;
    }

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onClick={onClick}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ productReducer: { products, loading } }) => ({
  products, loading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
