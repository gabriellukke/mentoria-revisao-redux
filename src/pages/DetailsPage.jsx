import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductAttributes from '../components/ProductAttributes';
import { addToCart } from '../redux/actions/productAction';

import '../css/DetailsPage.css';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    // destructuring da lista de produtos e do id passado pela URL
    const { products, match: { params: { id } } } = this.props;

    // filtragem do produto pelo id
    const product = products.find((prod) => prod.id === id);

    this.state = {
      product,
    };
  }

  onAddToCart(id) {
    const { products, onClick } = this.props;
    const product = products.find((prod) => prod.id === id);
    onClick(product);
  }

  render() {
    const {
      product: {
        warranty, attributes, thumbnail, price, title,
      },
    } = this.state;

    const { match: { params: { id } }, onClick } = this.props;

    return (
      <div className="product-details-card">
        <div className="product-details">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          <div className="product-details-info">
            <Link to="/products">Voltar para tela inicial</Link>
            <h2>{title}</h2>
            <span>{warranty}</span>
            <span>R${price.toLocaleString()}</span>
          </div>
        </div>
        <ProductAttributes attributes={attributes} />
        <button type="button" onClick={() => onClick(id)}>
          Adicionar Item
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ productReducer: { products } }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
