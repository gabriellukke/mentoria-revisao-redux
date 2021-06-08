import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../components/ProductCard';
import { removeFromCart } from '../redux/actions/productAction';

class CartPage extends Component {
  render() {
    const { cartProducts, onClick } = this.props;

    return (
      <div className="product-list">
        {cartProducts.map((product) => (
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

const mapStateToProps = ({ productReducer: { cartProducts } }) => ({
  cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
